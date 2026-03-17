import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const phoneNumber = "41762445552";
  const message = encodeURIComponent("Bonjour Matyas, j'aimerais en savoir plus sur vos soins énergétiques.");
  const url = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contacter via WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full px-5 py-3 shadow-lg transition-all duration-300 hover:scale-105 group"
    >
      <MessageCircle className="w-6 h-6" />
      <span className="hidden sm:inline text-sm font-medium">WhatsApp</span>
    </a>
  );
};

export default WhatsAppButton;
