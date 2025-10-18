import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1A1F2C] via-[#1e2433] to-[#1A1F2C]">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1A1F2C]/90 backdrop-blur-md border-b border-[#D4AF37]/20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#B8932E] flex items-center justify-center">
                <span className="text-[#1A1F2C] font-bold text-xl">L</span>
              </div>
              <span className="text-2xl font-bold text-white">LixiangOil</span>
            </div>
            <div className="hidden md:flex gap-8">
              <a href="#advantages" className="text-white/80 hover:text-[#D4AF37] transition-colors">Преимущества</a>
              <a href="#specs" className="text-white/80 hover:text-[#D4AF37] transition-colors">Характеристики</a>
              <a href="#certificates" className="text-white/80 hover:text-[#D4AF37] transition-colors">Сертификаты</a>
              <a href="#locations" className="text-white/80 hover:text-[#D4AF37] transition-colors">Где купить</a>
              <a href="#contacts" className="text-white/80 hover:text-[#D4AF37] transition-colors">Контакты</a>
            </div>
          </div>
        </div>
      </nav>

      <section className="relative pt-32 pb-24 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img 
            src="https://cdn.poehali.dev/projects/5a6d4ed9-e5c8-4325-98da-dff96cbcc905/files/3060cdfa-8b01-4668-b461-8de88c4d1a92.jpg"
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="inline-block px-4 py-2 bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-full">
                <span className="text-[#D4AF37] text-sm font-semibold">Премиальное моторное масло</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
                LixiangOil
                <span className="block text-[#D4AF37] mt-2">Высший класс защиты</span>
              </h1>
              <p className="text-xl text-white/70 leading-relaxed">
                Инновационная формула для автомобилей Lixiang. Максимальная защита двигателя при любых условиях эксплуатации.
              </p>
              <div className="flex gap-4">
                <Button className="bg-[#D4AF37] hover:bg-[#B8932E] text-[#1A1F2C] font-semibold px-8 py-6 text-lg">
                  Где купить
                </Button>
                <Button variant="outline" className="border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37]/10 px-8 py-6 text-lg">
                  Подробнее
                </Button>
              </div>
            </div>
            <div className="relative animate-fade-in">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#D4AF37]/20 to-transparent blur-3xl"></div>
              <img 
                src="https://cdn.poehali.dev/projects/5a6d4ed9-e5c8-4325-98da-dff96cbcc905/files/07e4a2f3-6531-4d98-9e7a-a753eb41dff4.jpg"
                alt="LixiangOil Product"
                className="relative w-full rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="advantages" className="py-24 px-6 bg-[#1e2433]/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Преимущества продукта</h2>
            <p className="text-xl text-white/60">Технологии нового поколения для вашего автомобиля</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: 'Shield', title: 'Защита двигателя', desc: 'Надежная защита от износа при экстремальных нагрузках' },
              { icon: 'Zap', title: 'Высокая производительность', desc: 'Улучшенная текучесть при низких температурах' },
              { icon: 'Droplet', title: 'Чистота двигателя', desc: 'Препятствует образованию отложений и шлама' },
              { icon: 'TrendingUp', title: 'Экономия топлива', desc: 'Снижение расхода топлива до 3%' }
            ].map((item, idx) => (
              <Card key={idx} className="bg-[#2a2f3f]/80 border-[#D4AF37]/20 hover:border-[#D4AF37]/50 transition-all hover:scale-105">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-[#D4AF37] to-[#B8932E] flex items-center justify-center">
                    <Icon name={item.icon as any} className="text-[#1A1F2C]" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                  <p className="text-white/60">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="specs" className="py-24 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Технические характеристики</h2>
            <p className="text-xl text-white/60">Полностью синтетическое моторное масло премиум-класса</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-[#2a2f3f]/80 border-[#D4AF37]/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-[#D4AF37] mb-6">Основные параметры</h3>
                <div className="space-y-4">
                  {[
                    { label: 'Вязкость SAE', value: '5W-30' },
                    { label: 'Класс качества', value: 'API SN Plus' },
                    { label: 'Температура вспышки', value: '230°C' },
                    { label: 'Температура застывания', value: '-45°C' }
                  ].map((spec, idx) => (
                    <div key={idx} className="flex justify-between items-center py-3 border-b border-white/10">
                      <span className="text-white/70">{spec.label}</span>
                      <span className="font-semibold text-white">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card className="bg-[#2a2f3f]/80 border-[#D4AF37]/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-[#D4AF37] mb-6">Применение</h3>
                <div className="space-y-4">
                  {[
                    { label: 'Автомобили Lixiang', value: 'Все модели' },
                    { label: 'Тип двигателя', value: 'Бензиновый' },
                    { label: 'Интервал замены', value: '10 000 км' },
                    { label: 'Объем упаковки', value: '1L, 4L, 5L' }
                  ].map((spec, idx) => (
                    <div key={idx} className="flex justify-between items-center py-3 border-b border-white/10">
                      <span className="text-white/70">{spec.label}</span>
                      <span className="font-semibold text-white">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="certificates" className="py-24 px-6 bg-[#1e2433]/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Сертификаты и допуски</h2>
            <p className="text-xl text-white/60">Соответствие международным стандартам качества</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { title: 'API SN Plus', desc: 'Американский институт нефти', icon: 'Award' },
              { title: 'ACEA A3/B4', desc: 'Европейская ассоциация автопроизводителей', icon: 'CheckCircle2' },
              { title: 'Lixiang Approved', desc: 'Одобрено производителем Lixiang', icon: 'BadgeCheck' }
            ].map((cert, idx) => (
              <Card key={idx} className="bg-[#2a2f3f]/80 border-[#D4AF37]/20 hover:border-[#D4AF37]/50 transition-all">
                <CardContent className="p-8 text-center space-y-4">
                  <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-[#D4AF37]/20 to-[#B8932E]/20 border-2 border-[#D4AF37] flex items-center justify-center">
                    <Icon name={cert.icon as any} className="text-[#D4AF37]" size={40} />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{cert.title}</h3>
                  <p className="text-white/60">{cert.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="locations" className="py-24 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Где купить</h2>
            <p className="text-xl text-white/60">Наши официальные точки продаж</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { city: 'Москва', address: 'ул. Автомобильная, 45', phone: '+7 (495) 123-45-67' },
              { city: 'Санкт-Петербург', address: 'пр. Моторный, 12', phone: '+7 (812) 234-56-78' },
              { city: 'Екатеринбург', address: 'ул. Механическая, 78', phone: '+7 (343) 345-67-89' },
              { city: 'Новосибирск', address: 'ул. Заводская, 23', phone: '+7 (383) 456-78-90' },
              { city: 'Казань', address: 'пр. Автозаводской, 56', phone: '+7 (843) 567-89-01' },
              { city: 'Владивосток', address: 'ул. Портовая, 34', phone: '+7 (423) 678-90-12' }
            ].map((location, idx) => (
              <Card key={idx} className="bg-[#2a2f3f]/80 border-[#D4AF37]/20 hover:border-[#D4AF37]/50 transition-all">
                <CardContent className="p-6 space-y-3">
                  <div className="flex items-start gap-3">
                    <Icon name="MapPin" className="text-[#D4AF37] mt-1" size={20} />
                    <div>
                      <h3 className="text-lg font-bold text-white mb-1">{location.city}</h3>
                      <p className="text-white/60 text-sm">{location.address}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 pt-2 border-t border-white/10">
                    <Icon name="Phone" className="text-[#D4AF37]" size={16} />
                    <a href={`tel:${location.phone}`} className="text-white/80 hover:text-[#D4AF37] transition-colors">
                      {location.phone}
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-24 px-6 bg-[#1e2433]/50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Свяжитесь с нами</h2>
            <p className="text-xl text-white/60">Остались вопросы? Мы с радостью на них ответим</p>
          </div>
          <Card className="bg-[#2a2f3f]/80 border-[#D4AF37]/20">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-white/80 text-sm font-semibold">Имя</label>
                    <Input 
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="Ваше имя"
                      className="bg-[#1A1F2C] border-[#D4AF37]/30 text-white"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-white/80 text-sm font-semibold">Email</label>
                    <Input 
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="example@mail.com"
                      className="bg-[#1A1F2C] border-[#D4AF37]/30 text-white"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-white/80 text-sm font-semibold">Телефон</label>
                  <Input 
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    placeholder="+7 (___) ___-__-__"
                    className="bg-[#1A1F2C] border-[#D4AF37]/30 text-white"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-white/80 text-sm font-semibold">Сообщение</label>
                  <Textarea 
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="Ваше сообщение..."
                    rows={5}
                    className="bg-[#1A1F2C] border-[#D4AF37]/30 text-white resize-none"
                  />
                </div>
                <Button type="submit" className="w-full bg-[#D4AF37] hover:bg-[#B8932E] text-[#1A1F2C] font-semibold py-6 text-lg">
                  Отправить сообщение
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="py-12 px-6 border-t border-[#D4AF37]/20">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#B8932E] flex items-center justify-center">
                <span className="text-[#1A1F2C] font-bold text-xl">L</span>
              </div>
              <span className="text-xl font-bold text-white">LixiangOil</span>
            </div>
            <p className="text-white/60 text-sm">© 2024 LixiangOil. Все права защищены.</p>
            <div className="flex gap-4">
              <a href="#" className="text-white/60 hover:text-[#D4AF37] transition-colors">
                <Icon name="Instagram" size={24} />
              </a>
              <a href="#" className="text-white/60 hover:text-[#D4AF37] transition-colors">
                <Icon name="Facebook" size={24} />
              </a>
              <a href="#" className="text-white/60 hover:text-[#D4AF37] transition-colors">
                <Icon name="Youtube" size={24} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
