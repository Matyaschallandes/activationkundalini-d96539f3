import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL as string;
const ANON = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY as string;

const Unsubscribe = () => {
  const [params] = useSearchParams();
  const token = params.get("token");
  const [state, setState] = useState<"loading" | "valid" | "done" | "error">("loading");
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (!token) {
      setState("error");
      setMessage("Lien invalide.");
      return;
    }
    fetch(`${SUPABASE_URL}/functions/v1/handle-email-unsubscribe?token=${token}`, {
      headers: { apikey: ANON },
    })
      .then((r) => r.json())
      .then((d) => {
        if (d.valid) setState("valid");
        else {
          setState("done");
          setMessage("Cette adresse est déjà désinscrite.");
        }
      })
      .catch(() => {
        setState("error");
        setMessage("Lien invalide ou expiré.");
      });
  }, [token]);

  const confirm = async () => {
    const res = await fetch(`${SUPABASE_URL}/functions/v1/handle-email-unsubscribe`, {
      method: "POST",
      headers: { "Content-Type": "application/json", apikey: ANON },
      body: JSON.stringify({ token }),
    });
    const d = await res.json();
    setState(d.success || d.reason === "already_unsubscribed" ? "done" : "error");
    setMessage(
      d.success || d.reason === "already_unsubscribed"
        ? "C'est fait, tu ne recevras plus d'emails."
        : "Une erreur est survenue."
    );
  };

  return (
    <Layout>
      <section className="container mx-auto max-w-xl px-4 py-24 text-center">
        <h1 className="font-heading text-3xl text-foreground mb-4">Désinscription</h1>
        {state === "loading" && (
          <p className="font-body text-muted-foreground">Vérification en cours…</p>
        )}
        {state === "valid" && (
          <>
            <p className="font-body text-muted-foreground mb-6">
              Confirme que tu ne souhaites plus recevoir d'emails de Karmaequilego.
            </p>
            <Button onClick={confirm}>Confirmer la désinscription</Button>
          </>
        )}
        {(state === "done" || state === "error") && (
          <p className="font-body text-muted-foreground">{message}</p>
        )}
      </section>
    </Layout>
  );
};

export default Unsubscribe;
