const clientToken = import.meta.env.VITE_PAYMENTS_CLIENT_TOKEN as string | undefined;

export function PaymentTestModeBanner() {
  if (!clientToken) return null;
  if (clientToken.startsWith("pk_test_")) {
    return (
      <div className="w-full bg-orange-100 border-b border-orange-300 px-4 py-2 text-center text-xs md:text-sm text-orange-800">
        Mode test : aucun vrai paiement n'est encaissé pour le moment.
      </div>
    );
  }
  return null;
}
