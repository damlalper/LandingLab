# PRD: Mini Landing + Bileşen Kütüphanesi

## 1. Proje Özeti
**Amaç:**
Semantik HTML, modern CSS (SCSS), basit JS etkileşimleri ve yeniden kullanılabilir UI bileşenlerine giriş yapmak. Bu proje, tek sayfalık bir ürün tanıtım landing sayfası ile küçük bir UI bileşen kütüphanesi geliştirmeyi hedefler.

**Süre:** 4 iş günü

---

## 2. Hedefler
- Tek sayfalık, görsel olarak çekici ve responsive bir landing sayfası oluşturmak.
- 5 temel UI bileşeni geliştirmek: Button, Input, Card, Modal, Accordion.
- Mobil öncelikli tasarım ve Light/Dark tema toggle ile modern kullanıcı deneyimi sunmak.
- Basit form doğrulama ve erişilebilirlik (a11y) sağlamak.
- Kod kalitesi, performans ve dokümantasyon standartlarını karşılamak.

---

## 3. Kullanıcı Hikayeleri
| ID  | Kullanıcı Hikayesi | Kabul Kriteri |
| --- | ----------------- | ------------- |
| US01 | Kullanıcı landing sayfayı ziyaret eder | Hero, özellikler, fiyat kartları, SSS ve iletişim formu görüntülenir |
| US02 | Kullanıcı temayı değiştirir | Light/Dark toggle çalışır ve tüm sayfa stilini değiştirir |
| US03 | Kullanıcı formu doldurur | Boş alan veya geçersiz e-posta için uyarı alınır |
| US04 | Geliştirici UI bileşenlerini kullanır | Button, Input, Card, Modal, Accordion props ile özelleştirilebilir |
| US05 | Kullanıcı farklı cihazdan erişir | Sayfa 3 breakpoint’te düzgün ve responsive görünür |
| US06 | Engelli kullanıcı sayfayı kullanır | Klavye ile gezinme ve aria-* kullanımı sağlanır |

---

## 4. Gereksinimler

### 4.1 Fonksiyonel Gereksinimler
- **Landing Sayfa Bileşenleri:** Hero, Özellikler, Fiyat Kartları, SSS (Accordion), İletişim Formu (yalancı submit)
- **UI Bileşenleri:** Button, Input, Card, Modal, Accordion (BEM veya CSS Modules/SCSS ile)
- **Form Doğrulama:** Basit e-posta format kontrolü ve boş alan uyarısı
- **Tema:** Light/Dark toggle (CSS vars)

### 4.2 Teknik Gereksinimler
- **Teknoloji:** Vite + Vanilla TS, React veya Angular
- **CSS:** SCSS zorunlu, PostCSS opsiyonel
- **Harici Kütüphane:** Kullanılamaz
- **Responsive:** 320px–1440px arası grid/flex ile uyumlu
- **Erişilebilirlik:** Semantic HTML, label-for, kontrast, klavye ile gezinme
- **Performans:** Görsel optimizasyon, lazy-load, Lighthouse ≥90/100

### 4.3 Dökümantasyon ve Teslimatlar
- Canlı demo (Vercel/Netlify)
- GitHub/GitLab repo
- README.md: kurulum, komutlar, mimari notlar
- Lighthouse rapor ekran görüntüsü
- /docs/adr-*.md: karar kayıtları
- Günlük ilerleme notu

---

## 5. Kabul Kriterleri

| Kategori | Puan | Açıklama |
| -------- | ---- | -------- |
| HTML/CSS Kalitesi ve Responsive | 30 | Grid/flex kullanımı, 3 breakpoint |
| Bileşen Yapısı / Yeniden Kullanılabilirlik | 25 | Props ile özelleştirilebilir, ayrı dosya/klasör yapısı |
| Erişilebilirlik | 15 | Klavye erişimi, aria-* |
| Performans / Lighthouse | 15 | Lazy-load, görsel optimizasyon, ≥90 puan |
| Dökümantasyon ve PR Kalitesi | 15 | README, ADR, anlamlı PR ve commit mesajları |

---

## 6. Kod Standartları ve Versiyon Kontrol
- **Git:** main korumalı, dev dalında geliştirme
- **Branch:** feat/* ve fix/*
- **Commit Mesajları:** Conventional Commits (feat:, fix:, docs:, …)
- **PR Kuralları:** Anlamlı başlık, kapsamlı açıklama, ekran görüntüsü/GIF, CHANGELOG.md güncellemesi
- **Lint & Test:** CI’da zorunlu

---

## 7. Zaman Çizelgesi
| Gün | Hedef |
| --- | ----- |
| 1 | Proje setup, temel HTML/CSS, Hero ve temel layout |
| 2 | Landing sayfa bölümleri: Özellikler, Fiyat Kartları, SSS |
| 3 | UI bileşenleri geliştirme ve props ile yapılandırma |
| 4 | Tema toggle, form doğrulama, responsive test, erişilebilirlik, dokümantasyon, deploy |

---

## 8. Notlar
- Kodda animasyonlar yumuşak ve kullanıcı dostu olmalı
- Form doğrulama yalın JS ile basit ama kullanıcı deneyimini bozmayacak şekilde
- Görseller optimize edilmeli ve lazy-load kullanılmalı
- CSS vars ile Light/Dark tema yönetilmeli