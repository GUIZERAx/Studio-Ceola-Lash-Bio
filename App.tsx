import { useState, useEffect } from 'react';
import { 
  Instagram, 
  MapPin, 
  MessageCircle, 
  ChevronRight, 
  X, 
  Info,
  Share2,
  CalendarCheck
} from 'lucide-react';
import { SERVICES, CONTACT_INFO, PROFILE_IMAGE, ABOUT_TEXT, POLICIES } from './constants.ts';
import { Service } from './types.ts';

const App = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [activeTab, setActiveTab] = useState<'cilios' | 'sobrancelhas'>('cilios');

  // Trava o scroll do fundo quando o modal está aberto
  useEffect(() => {
    if (selectedService) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [selectedService]);

  const filteredServices = SERVICES.filter(s => s.category === activeTab);

  const handleWhatsAppClick = (message: string = "") => {
    const text = encodeURIComponent(message || `Olá, gostaria de agendar um horário.`);
    window.open(`https://wa.me/${CONTACT_INFO.whatsapp}?text=${text}`, '_blank');
  };

  const ServiceModal = ({ service, onClose }: { service: Service; onClose: () => void }) => (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/95 backdrop-blur-md">
      <div className="relative w-full max-w-md bg-zinc-900 rounded-[2.5rem] border border-zinc-800 shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300 flex flex-col max-h-[90vh]">
        
        <button 
          onClick={onClose}
          className="absolute top-5 right-5 z-30 p-2.5 bg-black/50 rounded-full text-white backdrop-blur-md border border-white/10 hover:bg-white/10 transition-colors"
        >
          <X size={20} />
        </button>

        <div className="overflow-y-auto hide-scrollbar flex-1">
          <div className="h-64 w-full relative">
            <img 
              src={service.image} 
              alt={service.title} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/20 to-transparent"></div>
            <div className="absolute bottom-6 left-8">
               <h3 className="text-3xl font-serif text-white font-bold tracking-tight">{service.title}</h3>
            </div>
          </div>

          <div className="p-8 space-y-8">
            <p className="text-zinc-400 leading-relaxed text-sm font-light">
              {service.description}
            </p>

            <div className="space-y-4">
              <div className="flex justify-between items-center p-5 bg-zinc-800/40 rounded-3xl border border-zinc-700/30 shadow-inner">
                <span className="font-medium text-zinc-300 uppercase text-[10px] tracking-widest">Valor Inicial</span>
                <span className="font-bold text-brand-gold text-2xl">R$ {service.price},00</span>
              </div>

              {service.maintenance && service.maintenance.length > 0 && (
                <div className="p-6 bg-zinc-800/20 rounded-3xl border border-zinc-800/50 space-y-4">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-bold">Tabela de Manutenção</p>
                  <div className="space-y-3">
                    {service.maintenance.map((m, idx) => (
                      <div key={idx} className="flex justify-between items-center text-sm">
                        <span className="text-zinc-400">Até {m.days} dias</span>
                        <span className="text-white font-semibold">R$ {m.price},00</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            <div className="h-4" /> {/* Spacer */}
          </div>
        </div>

        <div className="p-6 pt-2 bg-zinc-900 border-t border-zinc-800">
          <button 
            onClick={() => handleWhatsAppClick(`Olá, tenho interesse no ${service.title}. Gostaria de agendar.`)}
            className="w-full py-5 bg-brand-gold text-black font-bold rounded-2xl hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-3 shadow-xl shadow-brand-gold/20"
          >
            <CalendarCheck size={20} />
            Confirmar e Agendar
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="relative w-full min-h-screen bg-brand-black text-zinc-100 font-sans selection:bg-brand-gold selection:text-black">
      
      {/* Background Decor */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-20%] left-[-20%] w-[80%] h-[80%] bg-brand-gold/5 rounded-full blur-[140px]"></div>
        <div className="absolute bottom-[-20%] right-[-20%] w-[80%] h-[80%] bg-white/5 rounded-full blur-[140px]"></div>
      </div>

      <main className="relative z-10 w-full max-w-lg mx-auto px-6 pt-16 pb-32 flex flex-col">
        
        {/* Profile */}
        <div className="flex flex-col items-center text-center space-y-6 mb-14">
          <div className="relative">
            <div className="w-36 h-36 rounded-full p-1 bg-gradient-to-tr from-brand-gold via-zinc-900 to-brand-gold shadow-2xl">
              <img 
                src={PROFILE_IMAGE} 
                alt="Eluana Ceola" 
                className="w-full h-full rounded-full object-cover border-4 border-brand-black"
              />
            </div>
            <div className="absolute -bottom-2 -right-2 bg-brand-gold text-black p-2 rounded-full shadow-lg border-[3px] border-brand-black">
              <CalendarCheck size={16} />
            </div>
          </div>
          
          <div className="space-y-2">
            <h1 className="font-serif text-4xl font-bold tracking-tight text-white">Studio Ceola</h1>
            <p className="text-brand-gold text-[10px] uppercase tracking-[0.3em] font-bold opacity-80">{CONTACT_INFO.subtitle}</p>
          </div>

          <div className="flex gap-4 mt-2">
            {[
              { icon: Instagram, href: CONTACT_INFO.instagram },
              { icon: MessageCircle, onClick: () => handleWhatsAppClick() },
              { icon: MapPin, href: CONTACT_INFO.mapsUrl },
              { icon: Share2, onClick: () => navigator.share?.({ title: 'Studio Ceola', url: window.location.href }) }
            ].map((social, i) => (
              social.href ? (
                <a key={i} href={social.href} target="_blank" rel="noreferrer" className="p-4 bg-zinc-900/40 rounded-2xl text-zinc-400 hover:text-white hover:bg-zinc-800 transition-all border border-zinc-800/30 backdrop-blur-md">
                  <social.icon size={20} />
                </a>
              ) : (
                <button key={i} onClick={social.onClick} className="p-4 bg-zinc-900/40 rounded-2xl text-zinc-400 hover:text-white hover:bg-zinc-800 transition-all border border-zinc-800/30 backdrop-blur-md">
                  <social.icon size={20} />
                </button>
              )
            ))}
          </div>
        </div>

        {/* Primary Action Buttons */}
        <div className="space-y-4 mb-20">
          <button 
            onClick={() => handleWhatsAppClick()}
            className="w-full py-5 bg-white text-black font-extrabold rounded-2xl shadow-2xl hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3 text-lg"
          >
            <MessageCircle size={24} className="fill-current" />
            Agendar meu Horário
          </button>
          
          <a 
            href={CONTACT_INFO.mapsUrl}
            target="_blank"
            rel="noreferrer"
            className="w-full py-5 bg-zinc-900/50 border border-zinc-800/30 text-zinc-200 font-semibold rounded-2xl hover:bg-zinc-800/70 transition-all flex items-center justify-center gap-3 backdrop-blur-md"
          >
            <MapPin size={20} className="text-brand-gold" />
            Como chegar no Studio
          </a>
        </div>

        {/* Categories & Services */}
        <section className="mb-20">
          <div className="flex flex-col gap-4 mb-10">
             <div className="flex items-center justify-between">
                <h2 className="font-serif text-3xl text-white font-bold tracking-tight">Serviços</h2>
                <div className="flex bg-zinc-900/80 rounded-2xl p-1.5 border border-zinc-800/40 backdrop-blur-md">
                  <button 
                    onClick={() => setActiveTab('cilios')}
                    className={`px-6 py-2.5 text-[10px] uppercase tracking-widest font-extrabold rounded-xl transition-all duration-300 ${activeTab === 'cilios' ? 'bg-zinc-800 text-brand-gold shadow-lg ring-1 ring-white/5' : 'text-zinc-500'}`}
                  >
                    Cílios
                  </button>
                  <button 
                    onClick={() => setActiveTab('sobrancelhas')}
                    className={`px-6 py-2.5 text-[10px] uppercase tracking-widest font-extrabold rounded-xl transition-all duration-300 ${activeTab === 'sobrancelhas' ? 'bg-zinc-800 text-brand-gold shadow-lg ring-1 ring-white/5' : 'text-zinc-500'}`}
                  >
                    Design
                  </button>
                </div>
             </div>
          </div>

          <div className="grid grid-cols-2 gap-5">
            {filteredServices.map((service) => (
              <div 
                key={service.id}
                onClick={() => setSelectedService(service)}
                className="group relative aspect-[10/14] overflow-hidden rounded-[2rem] bg-zinc-900 border border-zinc-800/40 cursor-pointer shadow-xl active:scale-[0.97] transition-all duration-500"
              >
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-110 group-hover:opacity-80 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/10 to-transparent"></div>
                
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="font-serif text-white text-base font-bold mb-1.5 leading-tight group-hover:text-brand-gold transition-colors">{service.title}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-extrabold text-brand-gold bg-brand-gold/10 px-2 py-1 rounded-md">R$ {service.price}</span>
                    <div className="p-2 bg-white/5 rounded-full backdrop-blur-lg border border-white/10 group-hover:bg-white/20 transition-all">
                      <ChevronRight size={14} className="text-white" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Info Cards */}
        <div className="space-y-10 mb-10">
          <section className="bg-zinc-900/30 rounded-[2.5rem] p-10 border border-zinc-800/40 backdrop-blur-md">
            <div className="flex items-center gap-3 mb-6 text-brand-gold">
              <div className="w-8 h-[1px] bg-brand-gold/30"></div>
              <Info size={18} />
              <span className="text-[10px] uppercase tracking-[0.3em] font-extrabold">Sobre o Studio</span>
              <div className="w-8 h-[1px] bg-brand-gold/30"></div>
            </div>
            <p className="text-zinc-400 text-sm leading-relaxed font-light italic">
              "{ABOUT_TEXT}"
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="font-serif text-2xl text-white font-bold px-2 tracking-tight">Informações Importantes</h2>
            <div className="space-y-4">
              {POLICIES.map((policy, idx) => (
                <div key={idx} className="bg-zinc-900/30 border border-zinc-800/20 rounded-3xl p-6 backdrop-blur-sm group hover:border-zinc-700/40 transition-all">
                  <h4 className="text-white font-bold text-sm mb-3 flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-brand-gold group-hover:scale-125 transition-transform"></div>
                    {policy.title}
                  </h4>
                  <p className="text-zinc-500 text-xs leading-relaxed pl-5 font-medium">
                    {policy.text}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Footer */}
        <footer className="text-center pt-20 pb-10 border-t border-zinc-900/50 mt-10">
          <div className="font-serif text-3xl font-bold text-white mb-4 tracking-tighter">Studio Ceola</div>
          <p className="text-zinc-600 text-[10px] max-w-[280px] mx-auto mb-10 leading-loose uppercase tracking-[0.2em] font-bold">
            {CONTACT_INFO.address}
          </p>
          <div className="flex items-center justify-center gap-3 text-[10px] text-zinc-700 font-extrabold uppercase tracking-widest">
            <span>© 2024</span>
            <div className="w-1 h-1 rounded-full bg-zinc-900"></div>
            <a href="https://instagram.com/ceolalash" className="hover:text-brand-gold transition-colors">By Studio Ceola</a>
          </div>
        </footer>

      </main>

      {/* Modal */}
      {selectedService && (
        <ServiceModal 
          service={selectedService} 
          onClose={() => setSelectedService(null)} 
        />
      )}
    </div>
  );
};

export default App;