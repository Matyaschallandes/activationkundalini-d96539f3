const VideoSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl text-gradient-gold mb-4">
            Découvrez mon approche
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Une présentation de mes soins énergétiques et de l'activation Kundalini
          </p>
        </div>
        <div className="max-w-md mx-auto">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[9/16]">
            <iframe
              src="https://www.youtube.com/embed/Rt435LVSH5Q"
              title="Présentation - Activation Kundalini"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
