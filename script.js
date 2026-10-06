/**
 * MUHAMMAD ROIHAN - LUXURY HOSPITALITY PORTFOLIO
 * Interactive JavaScript Engine
 * Features:
 * - Bilingual (EN / ID) state switcher
 * - Front Office Hospitality Simulator
 * - Web Speech API Voice Intro (EN & ID)
 * - Dark / Light Luxury theme toggle
 * - Copy to clipboard & Toast notifications
 * - WhatsApp direct generator
 * - Smooth scroll, Scroll-spy, and reading progress
 */

// --- 1. TRANSLATION DICTIONARY ---
const translations = {
  en: {
    // Top banner
    "banner-status": "Actively seeking opportunities in Hospitality: Front Office, Reservation Agent & Guest Relations",
    "banner-cta": "Hire Me",

    // Navbar
    "brand-title": "Hospitality & Guest Relations",
    "nav-about": "About",
    "nav-experience": "Experience",
    "nav-simulator": "Service Simulator",
    "nav-education": "Education & Research",
    "nav-skills": "Skills & Credentials",
    "nav-contact": "Contact",
    "btn-cv": "CV PDF",

    // Hero
    "hero-badge": "Luxury Hospitality & Guest Service",
    "hero-greeting": "Welcoming Excellence,",
    "hero-tagline": "English Education Graduate (GPA 3.61, TOEFL 557) specialized in personalized guest handling, international communication, and front-office service etiquette.",
    "voice-play": "Listen to Audio Introduction",
    "voice-stop": "Stop Audio Introduction",
    "voice-status-ready": "Bilingual audio powered by speech synthesis",
    "voice-status-speaking": "Speaking in English...",
    "stat-gpa": "Academic GPA",
    "stat-toefl": "TOEFL Score",
    "stat-bilingual": "Bilingual",
    "stat-languages": "English & Indonesian",
    "hero-cta-sim": "Try Service Simulator",
    "hero-cta-contact": "Connect With Me",
    "hero-status": "Ready for Service",
    "pill-top-title": "Front Office Focus",
    "pill-top-sub": "Reservation & Guest Relations",
    "pill-bot-title": "Pragmatic Communication",
    "pill-bot-sub": "Persuasive & Empathic",

    // About
    "about-subtitle": "Professional Profile",
    "about-title": "About Muhammad Roihan",
    "about-lead": "Bridging linguistic mastery, emotional intelligence, and meticulous hospitality standards to deliver memorable guest experiences.",
    "about-bio-title": "Dedicated to 5-Star Guest Delight",
    "about-bio-p1": "A motivated English Education graduate with strong communication skills and extensive experience in personalized client service and guest interaction. Throughout my previous roles, I developed the ability to assist clients with professionalism, active listening, and a service-oriented attitude.",
    "about-bio-p2": "I am confident interacting with diverse individuals, including international guests, consistently maintaining a polite, approachable, and professional demeanor. My objective is to contribute to hospitality excellence as a Reservation Agent, Front Desk Agent, or Guest Relations Officer in an esteemed hotel environment.",
    "bio-loc-label": "Location:",
    "bio-edu-label": "Education:",
    "bio-lang-label": "Languages:",

    // Pillars
    "pillar1-title": "Personalized Guest Handling",
    "pillar1-desc": "Tailoring every interaction to individual guest preferences, anticipating needs, and maintaining calm emotional composure across high-pressure peak hours.",
    "pillar2-title": "International & Bilingual Fluency",
    "pillar2-desc": "Providing clear, warm, and articulate communication in English (TOEFL 557) and Indonesian, welcoming diverse global travelers seamlessly.",
    "pillar3-title": "Pragmatic Communication Insights",
    "pillar3-desc": "Underpinned by thesis research in linguistic pragmatics and persuasion, effectively applying positive framing, de-escalation, and brand storytelling.",
    "pillar4-title": "Professional Hospitality Etiquette",
    "pillar4-desc": "Strict adherence to grooming standards, courteous greeting protocols, telephone etiquette, and guest privacy standards.",

    // Simulator
    "sim-subtitle": "Interactive Experience",
    "sim-title": "Front Office Hospitality Simulator",
    "sim-lead": "Select a guest scenario below to experience how Muhammad Roihan resolves challenges, creates rapport, and applies 5-star service principles.",
    "sim-tab-1": "1. VIP Early Arrival",
    "sim-tab-2": "2. Reservation Request",
    "sim-tab-3": "3. Local Cultural Concierge",
    "sim-tab-4": "4. Persuasive Digital Branding",
    "sim-context-lbl": "The Challenge:",
    "sim-solution-lbl": "Muhammad Roihan's Action Plan:",
    "sim-framework-lbl": "Applied Hospitality Framework:",
    "sim-outcome-lbl": "Guest Impact:",

    // Experience
    "exp-subtitle": "Career Journey",
    "exp-title": "Work Experience",
    "exp-lead": "Hands-on background in client handling, guest assistance, and service delivery reflecting hotel industry standards.",
    "exp1-period": "Apr 2024 - Mar 2025",
    "exp1-role": "Freelance Personal Service",
    "exp1-type": "Client Relations & Personalized Care",
    "exp1-summary": "Delivered tailored services based on individual client requirements, maintaining high patience, emotional self-regulation, and guest-relation protocols consistent with upscale hotel standards.",
    "exp1-p1": "Delivered tailored service based on each client's specific needs, reflecting the personalized approach expected in guest-relation roles within the hospitality industry.",
    "exp1-p2": "Demonstrated patience, emotional control, and professionalism when managing varying personalities, demands, and service expectations.",
    "exp1-p3": "Strengthened guest-handling abilities, problem-solving skills, and service etiquette directly aligned with hotel service standards.",

    "exp2-period": "Mar 2023 - May 2023",
    "exp2-role": "Visitor Assistance Guide",
    "exp2-type": "Frontline Hospitality & Visitor Orientation",
    "exp2-summary": "Served as the frontline ambassador, welcoming local and international visitors with courtesy, providing bilingual orientation, and ensuring smooth guest flow.",
    "exp2-p1": "Welcomed and supported visitors with a courteous demeanor, creating a positive first impression aligned with hospitality standards.",
    "exp2-p2": "Provided clear information and assistance in both English and Indonesian for local and international visitors.",
    "exp2-p3": "Ensured visitors felt respected, guided, and comfortable throughout their visit.",

    // Education
    "edu-subtitle": "Academic Foundations",
    "edu-title": "Education & Research",
    "edu-lead": "Strong academic distinction in English Education with a specialization in language pragmatics, audience perception, and persuasive communication.",
    "edu-period": "Aug 2021 - Oct 2025",
    "edu-degree": "Bachelor of English Education (S.Pd.)",
    "edu-desc": "Graduated with distinction (GPA 3.61). Intensive curriculum encompassing advanced English linguistics, cross-cultural rhetoric, pedagogical communication, and public address.",
    "edu-takeaway-lbl": "Core Competencies Developed:",
    "edu-t1": "Cross-cultural communication and nuanced language subtleties",
    "edu-t2": "Active listening, public presentation, and audience engagement",
    "edu-t3": "Pragmatic speech acts (politeness maxims, requests, negotiations)",

    // Thesis
    "thesis-tag": "Undergraduate Thesis Spotlight",
    "thesis-desc1": "Conducted deep qualitative research on persuasive communication techniques, speech acts, and the pragmatic mechanisms of digital content that shape audience behavior and psychological trust.",
    "thesis-desc2": "Developed a nuanced understanding of how language function directly drives marketing, hospitality branding, and positive guest perception.",
    "thesis-transfer-title": "Direct Application to Hospitality:",
    "thesis-t1": "Guest Rapport: Utilizing polite speech acts and subtle phrasing to foster warm interpersonal connections.",
    "thesis-t2": "De-escalation: Applying pragmatic empathy principles to turn guest complaints into loyalty.",
    "thesis-t3": "Upselling & Concierge: Framing recommendations persuasively without feeling intrusive or transactional.",

    // Skills
    "skills-subtitle": "Competencies & Verification",
    "skills-title": "Skills & Certifications",
    "skills-lead": "Certified proficiency in English and Public Speaking, combined with specialized hospitality operational skills.",
    "toefl-band": "Overall Band Score (B2+ / Advanced Working Proficiency)",
    "toefl-desc": "High fluency in spoken and written English, capable of handling international reservations, VIP dialogue, and cross-cultural concierge services.",
    "cert-ps-title": "Public Speaking Certification",
    "cert-ps-badge": "Certified",
    "cert-ps-org": "Professional Presentation & Oratory (2022)",
    "cert-ps-desc": "Trained in vocal projection, poise, stage confidence, and engaging audiences under pressure—ideal for briefing visitors and group coordination.",
    "cat1-title": "Hospitality & Front Office",
    "cat2-title": "Communication & Languages",
    "cat3-title": "Digital & Emotional Skills",
    "skill-gh": "Guest Handling & Customer Service",
    "skill-pe": "Professional Hospitality Etiquette",
    "skill-ac": "Adaptability & Problem-Solving",
    "skill-en": "English Fluency (TOEFL 557)",
    "skill-ps": "Public Speaking & Articulation",
    "skill-prag": "Pragmatic & Persuasive Dialogue",
    "skill-eq": "Emotional Composure & Tact",
    "skill-sm": "Social Media & Digital Marketing",
    "skill-br": "Branding & Audience Perception",

    // Contact
    "contact-subtitle": "Get in Touch",
    "contact-title": "Let's Connect & Collaborate",
    "contact-lead": "Interested in discussing Front Office opportunities, reservation roles, or hospitality collaborations? Reach out directly.",
    "lbl-email": "Email Address",
    "lbl-phone": "Phone / WhatsApp",
    "lbl-address": "Address",
    "cv-box-title": "Need the Official Resume?",
    "cv-box-desc": "Download the complete CV in PDF format for recruitment archiving.",
    "btn-download-full-cv": "Download Muhammad Roihan CV (PDF)",
    "form-title": "Send a Direct Message / Invitation",
    "form-desc": "Fill out this quick form to send an inquiry or schedule an interview.",
    "form-name-lbl": "Your Name / Hotel Name",
    "form-email-lbl": "Email Address",
    "form-subject-lbl": "Subject / Inquiring Role",
    "form-msg-lbl": "Message",
    "btn-send-message": "Send via Email",
    "opt-1": "Front Office / Front Desk Agent Position",
    "opt-2": "Reservation Agent Position",
    "opt-3": "Guest Relations Officer Opportunity",
    "opt-4": "Interview Invitation",
    "opt-5": "Other Inquiries / Networking",

    // Footer
    "footer-tagline": "Elevating Hospitality Standards with Warmth, Precision, and Persuasive Communication.",
    "footer-rights": "All rights reserved."
  },

  id: {
    // Top banner
    "banner-status": "Aktif mencari peluang kerja di Bidang Hospitality: Front Office, Reservation Agent & Guest Relations",
    "banner-cta": "Rekrut Saya",

    // Navbar
    "brand-title": "Hospitality & Hubungan Tamu",
    "nav-about": "Tentang",
    "nav-experience": "Pengalaman",
    "nav-simulator": "Simulator Pelayanan",
    "nav-education": "Pendidikan & Riset",
    "nav-skills": "Keahlian & Sertifikasi",
    "nav-contact": "Kontak",
    "btn-cv": "Unduh CV",

    // Hero
    "hero-badge": "Pelayanan Hospitality & Hubungan Tamu Mewah",
    "hero-greeting": "Menghadirkan Pelayanan Prima,",
    "hero-tagline": "Lulusan Pendidikan Bahasa Inggris (IPK 3.61, TOEFL 557) spesialis dalam penanganan tamu personal, komunikasi internasional, dan etika front-office hotel.",
    "voice-play": "Dengarkan Audio Perkenalan",
    "voice-stop": "Hentikan Audio Perkenalan",
    "voice-status-ready": "Audio interaktif didukung teknologi sintesis suara",
    "voice-status-speaking": "Sedang berbicara dalam Bahasa Indonesia...",
    "stat-gpa": "IPK Kelulusan",
    "stat-toefl": "Skor TOEFL",
    "stat-bilingual": "Dwibahasa",
    "stat-languages": "Inggris & Indonesia",
    "hero-cta-sim": "Coba Simulator Layanan",
    "hero-cta-contact": "Hubungi Saya",
    "hero-status": "Siap Bertugas",
    "pill-top-title": "Fokus Front Office",
    "pill-top-sub": "Reservasi & Hubungan Tamu",
    "pill-bot-title": "Komunikasi Pragmatik",
    "pill-bot-sub": "Persuasif & Penuh Empati",

    // About
    "about-subtitle": "Profil Profesional",
    "about-title": "Tentang Muhammad Roihan",
    "about-lead": "Memadukan kefasihan bahasa, kecerdasan emosional, dan standar keramahan hotel untuk menghadirkan pengalaman berkesan bagi setiap tamu.",
    "about-bio-title": "Berdedikasi untuk Kepuasan Tamu Standar Hotel",
    "about-bio-p1": "Lulusan Pendidikan Bahasa Inggris yang termotivasi dengan kemampuan komunikasi kuat serta pengalaman dalam pelayanan klien personal dan interaksi tamu. Melalui pengalaman sebelumnya, saya mengasah kemampuan mendampingi tamu dengan profesionalisme, mendengarkan secara aktif, dan sikap berorientasi pada pelayanan.",
    "about-bio-p2": "Saya sangat percaya diri berinteraksi dengan beragam individu, termasuk tamu internasional, serta konsisten menjaga sikap santun, ramah, dan profesional. Tujuan saya adalah berkontribusi nyata pada industri perhotelan sebagai Reservation Agent, Front Desk Agent, atau Guest Relations Officer di hotel terkemuka.",
    "bio-loc-label": "Domisili:",
    "bio-edu-label": "Pendidikan:",
    "bio-lang-label": "Bahasa:",

    // Pillars
    "pillar1-title": "Penanganan Tamu yang Personal",
    "pillar1-desc": "Menyesuaikan pendekatan pada kebutuhan spesifik setiap tamu, proaktif mengantisipasi keinginan mereka, dan menjaga ketenangan emosi dalam situasi padat.",
    "pillar2-title": "Kefasihan Bahasa Internasional",
    "pillar2-desc": "Berkomunikasi secara lugas, hangat, dan santun dalam Bahasa Inggris (TOEFL 557) serta Bahasa Indonesia untuk menyambut tamu domestik maupun mancanegara.",
    "pillar3-title": "Wawasan Komunikasi Pragmatik",
    "pillar3-desc": "Didukung riset skripsi di bidang pragmatik bahasa dan persuasi, efektif menerapkan tutur kata positif, meredakan ketegangan, dan memperkuat citra hotel.",
    "pillar4-title": "Etika & Standar Hospitality Profesional",
    "pillar4-desc": "Kepatuhan ketat terhadap standar penampilan (grooming), tata krama penyambutan, etika telepon hotel, dan menjaga privasi tamu.",

    // Simulator
    "sim-subtitle": "Pengalaman Interaktif",
    "sim-title": "Simulator Pelayanan Front Office",
    "sim-lead": "Pilih skenario tamu di bawah ini untuk melihat bagaimana Muhammad Roihan menyelesaikan tantangan, membangun keakraban, dan menerapkan standar bintang 5.",
    "sim-tab-1": "1. Kedatangan Awal Tamu VIP",
    "sim-tab-2": "2. Permintaan Kamar Reservasi",
    "sim-tab-3": "3. Panduan Budaya Lokal",
    "sim-tab-4": "4. Branding Digital Persuasif",
    "sim-context-lbl": "Tantangan Situasi:",
    "sim-solution-lbl": "Rencana Tindakan Muhammad Roihan:",
    "sim-framework-lbl": "Kerangka Kerja Hospitality:",
    "sim-outcome-lbl": "Dampak pada Tamu:",

    // Experience
    "exp-subtitle": "Perjalanan Karir",
    "exp-title": "Pengalaman Kerja",
    "exp-lead": "Pengalaman praktis dalam pelayanan klien, pendampingan pengunjung, dan standar pelayanan yang selaras dengan industri perhotelan.",
    "exp1-period": "Apr 2024 - Mar 2025",
    "exp1-role": "Freelance Pelayanan Personal",
    "exp1-type": "Hubungan Klien & Pelayanan Khusus",
    "exp1-summary": "Memberikan layanan yang disesuaikan dengan kebutuhan setiap klien, menjaga kesabaran tinggi, kendali emosional, serta tata krama pelayanan yang selaras dengan standar hotel.",
    "exp1-p1": "Memberikan layanan yang disesuaikan secara personal berdasarkan kebutuhan setiap klien, mencerminkan pendekatan dalam peran guest-relations perhotelan.",
    "exp1-p2": "Menunjukkan kesabaran, pengendalian emosi, dan profesionalisme saat menghadapi beragam karakter klien dan ekspektasi layanan yang variatif.",
    "exp1-p3": "Memperkuat kemampuan penanganan tamu, penyelesaian masalah (problem solving), dan etika pelayanan sesuai standar hotel.",

    "exp2-period": "Mar 2023 - Mei 2023",
    "exp2-role": "Pemandu Pendamping Pengunjung (Visitor Guide)",
    "exp2-type": "Hospitality Garis Depan & Orientasi Pengunjung",
    "exp2-summary": "Bertindak sebagai duta garis depan, menyambut pengunjung lokal dan mancanegara dengan santun, memberikan informasi dwibahasa, serta memastikan alur kunjungan nyaman.",
    "exp2-p1": "Menyambut dan mendampingi pengunjung dengan sikap santun, menciptakan impresi awal yang positif sesuai standar perhotelan.",
    "exp2-p2": "Memberikan informasi dan bantuan yang jelas dalam Bahasa Inggris dan Bahasa Indonesia bagi pengunjung lokal maupun internasional.",
    "exp2-p3": "Memastikan para pengunjung merasa dihormati, terpandu, dan merasa nyaman sepanjang pengalaman mereka.",

    // Education
    "edu-subtitle": "Fondasi Akademik",
    "edu-title": "Pendidikan & Riset",
    "edu-lead": "Prestasi akademik memuaskan di program studi Pendidikan Bahasa Inggris dengan fokus riset pragmatik bahasa, persepsi audiens, dan persuasi.",
    "edu-period": "Agu 2021 - Okt 2025",
    "edu-degree": "Sarjana Pendidikan Bahasa Inggris (S.Pd.)",
    "edu-desc": "Lulus dengan predikat sangat memuaskan (IPK 3.61). Kurikulum intensif mencakup linguistik tingkat lanjut, retorika lintas budaya, komunikasi pedagogik, dan public speaking.",
    "edu-takeaway-lbl": "Kompetensi Utama yang Dikuasai:",
    "edu-t1": "Komunikasi lintas budaya dan kepekaan nuansa bahasa",
    "edu-t2": "Mendengarkan aktif, presentasi publik, dan membangun keterlibatan tamu",
    "edu-t3": "Tindak tutur pragmatik (maksim kesantunan, permohonan, dan negosiasi halus)",

    // Thesis
    "thesis-tag": "Sorotan Skripsi Sarjana",
    "thesis-desc1": "Melakukan penelitian kualitatif mendalam mengenai strategi komunikasi persuasif, tindak tutur, dan mekanisme pragmatik konten digital dalam memengaruhi perilaku serta kepercayaan audiens.",
    "thesis-desc2": "Mengembangkan pemahaman mendalam tentang bagaimana fungsi bahasa berperan langsung dalam strategi pemasaran, branding hotel, dan persepsi positif tamu.",
    "thesis-transfer-title": "Aplikasi Langsung pada Industri Perhotelan:",
    "thesis-t1": "Keakraban Tamu: Menggunakan tindak tutur santun dan pilihan kata ramah untuk membangun relasi yang hangat.",
    "thesis-t2": "Peredam Keluhan: Menerapkan empati pragmatik untuk mengubah kekecewaan tamu menjadi loyalitas jangka panjang.",
    "thesis-t3": "Upselling & Rekomendasi: Menyampaikan saran fasilitas dan tur secara persuasif tanpa terkesan memaksa.",

    // Skills
    "skills-subtitle": "Kompetensi & Sertifikasi",
    "skills-title": "Keahlian & Sertifikasi",
    "skills-lead": "Keahlian teruji dalam Bahasa Inggris dan Public Speaking bersertifikat, dipadukan dengan keterampilan operasional front office perhotelan.",
    "toefl-band": "Skor Keseluruhan (B2+ / Kemahiran Kerja Tingkat Lanjut)",
    "toefl-desc": "Kemampuan tinggi dalam Bahasa Inggris lisan dan tulisan, siap menangani reservasi internasional, dialog VIP, dan layanan concierge lintas budaya.",
    "cert-ps-title": "Sertifikasi Public Speaking",
    "cert-ps-badge": "Bersertifikat",
    "cert-ps-org": "Presentasi Profesional & Oratori (2022)",
    "cert-ps-desc": "Terlatih dalam proyeksi vokal, gestur tubuh profesional, kepercayaan diri, dan berbicara di depan audiens—sangat ideal untuk briefing tamu dan koordinasi grup.",
    "cat1-title": "Hospitality & Front Office",
    "cat2-title": "Komunikasi & Bahasa",
    "cat3-title": "Keterampilan Digital & Emosional",
    "skill-gh": "Penanganan Tamu & Layanan Pelanggan",
    "skill-pe": "Etika Hospitality Profesional",
    "skill-ac": "Adaptabilitas & Pemecahan Masalah",
    "skill-en": "Kefasihan Bahasa Inggris (TOEFL 557)",
    "skill-ps": "Public Speaking & Artikulasi Vokal",
    "skill-prag": "Dialog Pragmatik & Persuasif",
    "skill-eq": "Pengendalian Emosi & Ketenangan",
    "skill-sm": "Media Sosial & Pemasaran Digital",
    "skill-br": "Branding & Manajemen Persepsi Tamu",

    // Contact
    "contact-subtitle": "Hubungi Saya",
    "contact-title": "Mari Terhubung & Berkolaborasi",
    "contact-lead": "Tertarik mendiskusikan peluang Front Office, Reservation Agent, atau kolaborasi bidang hospitality? Silakan hubungi langsung.",
    "lbl-email": "Alamat Email",
    "lbl-phone": "Telepon / WhatsApp",
    "lbl-address": "Alamat",
    "cv-box-title": "Butuh Berkas CV Resmi?",
    "cv-box-desc": "Unduh berkas CV lengkap dalam format PDF untuk arsip rekrutmen hotel Anda.",
    "btn-download-full-cv": "Unduh CV Muhammad Roihan (PDF)",
    "form-title": "Kirim Pesan / Undangan Interview",
    "form-desc": "Isi formulir singkat ini untuk mengirim pesan langsung atau penawaran kerja.",
    "form-name-lbl": "Nama Anda / Nama Hotel",
    "form-email-lbl": "Alamat Email",
    "form-subject-lbl": "Subjek / Posisi yang Ditawarkan",
    "form-msg-lbl": "Pesan",
    "btn-send-message": "Kirim via Email",
    "opt-1": "Posisi Front Office / Front Desk Agent",
    "opt-2": "Posisi Reservation Agent",
    "opt-3": "Posisi Guest Relations Officer",
    "opt-4": "Undangan Wawancara Kerja",
    "opt-5": "Pertanyaan Lainnya / Jejaring Kerja",

    // Footer
    "footer-tagline": "Meningkatkan Standar Hospitality dengan Kehangatan, Presisi, dan Komunikasi Persuasif.",
    "footer-rights": "Hak cipta dilindungi undang-undang."
  }
};

// --- 2. SCENARIO DATA FOR FRONT OFFICE SIMULATOR ---
const scenarioData = {
  vip: {
    category_en: "VIP Guest Relations",
    category_id: "Hubungan Tamu VIP",
    title_en: "International Executive Arrives 4 Hours Prior to Standard Check-in",
    title_id: "Eksekutif Internasional Tiba 4 Jam Lebih Awal dari Waktu Check-in",
    context_en: "A VIP business traveler arrives from an overseas flight at 10:00 AM. Their assigned suite is currently undergoing deep sanitization by housekeeping. The guest appears fatigued and mentioned an essential virtual meeting at 1:00 PM.",
    context_id: "Seorang tamu bisnis VIP tiba dari penerbangan luar negeri pukul 10:00 pagi. Kamar suite yang dipesan sedang dalam tahap pembersihan menyeluruh oleh housekeeping. Tamu tampak lelah dan menyampaikan ada rapat virtual penting pukul 13:00 siang.",
    steps_en: [
      {
        num: "1",
        title: "Gracious Welcome & Immediate Comfort",
        desc: "Gently acknowledge their long journey with a polite greeting in fluent English. Relieve them of heavy baggage with the concierge team and offer a chilled signature welcome drink."
      },
      {
        num: "2",
        title: "Proactive Priority Expediting",
        desc: "Without making false promises, discreetly notify Housekeeping dispatch to prioritize suite inspection while offering the guest access to the Executive Business Lounge."
      },
      {
        num: "3",
        title: "Seamless Workspace Accommodation",
        desc: "Provide high-speed WiFi credentials, a quiet private workstation in the lounge, and guarantee that baggage will be placed inside the suite the moment it is inspected."
      }
    ],
    steps_id: [
      {
        num: "1",
        title: "Penyambutan Hangat & Kenyamanan Langsung",
        desc: "Menyambut kedatangan dengan salam santun dalam Bahasa Inggris fasih, mengapresiasi perjalanan panjangnya, menitipkan bagasi ke tim concierge, serta menyajikan minuman selamat datang yang menyegarkan."
      },
      {
        num: "2",
        title: "Prioritas Cepat Tanpa Menjanjikan Hal Tak Pasti",
        desc: "Secara sigap berkoordinasi dengan tim Housekeeping untuk memprioritaskan penyelesaian kamar, sambil mengundang tamu beristirahat di Executive Business Lounge."
      },
      {
        num: "3",
        title: "Fasilitasi Kebutuhan Rapat Virtual",
        desc: "Memberikan akses WiFi kecepatan tinggi dan ruangan tenang di lounge agar tamu siap mengikuti rapat virtual pukul 13:00 tanpa kendala, seraya memastikan koper langsung diantar ke kamar."
      }
    ],
    framework_en: "H.E.A.T. Framework & Anticipatory Care",
    framework_id: "Metode H.E.A.T. & Pelayanan Antisipatif",
    outcome_en: "Transforms travel exhaustion into long-term brand loyalty & executive trust",
    outcome_id: "Mengubah rasa lelah perjalanan menjadi loyalitas tinggi dan kepercayaan tamu"
  },

  discrepancy: {
    category_en: "Reservation & Complaint Resolution",
    category_id: "Reservasi & Resolusi Keluhan",
    title_en: "Guest Room Preference Mismatch During Fully Booked Period",
    title_id: "Perbedaan Preferensi Kamar Saat Tingkat Hunian Penuh (High Season)",
    context_en: "A family arrives mentioning their online booking note specifically requested a high-floor quiet room with a double bed, but standard automatic allocation assigned twin beds on the second floor.",
    context_id: "Satu keluarga datang menyatakan bahwa pada catatan reservasi online mereka meminta kamar tenang di lantai atas dengan ranjang double, namun sistem otomatis menempatkan mereka di kamar twin lantai dua.",
    steps_en: [
      {
        num: "1",
        title: "Attentive Active Listening & Empathy",
        desc: "Listen completely without interruption or defensive explanations. Validate the importance of restful family comfort with sincere eye contact and apology for the mismatch."
      },
      {
        num: "2",
        title: "Swift System Cross-Checking",
        desc: "Review live reservation charts, check for potential early check-outs or room-move opportunities, and coordinate with the Duty Manager to arrange a complimentary bed-join with luxury topper or upgraded alternative."
      },
      {
        num: "3",
        title: "Value Recovery & Thoughtful Gesture",
        desc: "Offer complimentary breakfast passes or afternoon high tea vouchers to make up for the initial inconvenience, personally following up after they settle in."
      }
    ],
    steps_id: [
      {
        num: "1",
        title: "Mendengarkan Aktif & Empati Penuh",
        desc: "Mendengarkan keluhan tamu tanpa memotong pembicaraan atau membela sistem. Menunjukkan empati bahwa kenyamanan keluarga adalah hal utama, disertai permohonan maaf yang tulus."
      },
      {
        num: "2",
        title: "Pemeriksaan Sistem Cepat & Solutif",
        desc: "Memeriksa grafik reservasi real-time, berkoordinasi dengan Duty Manager untuk kemungkinan upgrade kamar atau merapikan tempat tidur dengan topper khusus demi kenyamanan maksimal."
      },
      {
        num: "3",
        title: "Pemulihan Layanan (Service Recovery)",
        desc: "Memberikan complimentary voucher sarapan/teh sore sebagai wujud kepedulian hotel, serta menelepon tamu 30 menit kemudian untuk memastikan kepuasan kamar mereka."
      }
    ],
    framework_en: "Service Recovery Paradox & Emotional De-escalation",
    framework_id: "Paradoks Pemulihan Layanan & De-eskalasi Emosi",
    outcome_en: "De-escalates tension immediately and creates a 5-star review opportunity",
    outcome_id: "Meredakan ketegangan seketika dan membuka peluang ulasan positif bintang 5"
  },

  cultural: {
    category_en: "Concierge & Cultural Storytelling",
    category_id: "Concierge & Rekomendasi Budaya",
    title_en: "International Travelers Inquiring for Authentic Local Highlights",
    title_id: "Wisatawan Asing Mencari Rekomendasi Budaya & Kuliner Otentik",
    context_en: "First-time European guests at the front desk ask for genuine cultural spots and artisan culinary experiences outside typical tourist guidebooks.",
    context_id: "Wisatawan Eropa yang baru pertama kali berkunjung menanyakan di Front Desk perihal tempat budaya otentik serta kuliner khas lokal di luar peta wisata umum.",
    steps_en: [
      {
        num: "1",
        title: "Engaging Consultative Inquiry",
        desc: "Ask curious, welcoming questions regarding their dietary preferences, walking appetite, and artistic interests in confident, friendly English."
      },
      {
        num: "2",
        title: "Curated Cultural Narrative",
        desc: "Share authentic insights on local West Java & Cianjur heritage—from historic tea plantations and artisan batik makers to traditional culinary gems."
      },
      {
        num: "3",
        title: "Personalized Itinerary Note",
        desc: "Handwrite a curated list with precise timing, safety tips, and estimated taxi fares, offering to arrange reputable hotel transport for their peace of mind."
      }
    ],
    steps_id: [
      {
        num: "1",
        title: "Pendekatan Konsultatif yang Hangat",
        desc: "Mengajukan pertanyaan ramah dalam Bahasa Inggris mengenai preferensi kuliner, ketertarikan seni, dan gaya bepergian mereka untuk memberikan saran yang tepat sasaran."
      },
      {
        num: "2",
        title: "Penyampaian Cerita Budaya (Storytelling)",
        desc: "Menceritakan keunikan warisan lokal Jawa Barat & Cianjur—seperti perkebunan teh bersejarah, batik khas, dan kuliner tradisional dengan narasi menarik."
      },
      {
        num: "3",
        title: "Panduan Rinci yang Personal",
        desc: "Menuliskan rekomendasi rute, estimasi biaya transportasi, waktu kunjungan terbaik, serta menawarkan bantuan pemesanan armada terpercaya dari hotel."
      }
    ],
    framework_en: "Tailored Concierge Intelligence & Cross-Cultural Fluency",
    framework_id: "Kecerdasan Concierge Personal & Wawasan Lintas Budaya",
    outcome_en: "Delivers an unforgettable local immersion, cementing guest emotional connection",
    outcome_id: "Memberikan pengalaman lokal tak terlupakan dan ikatan emosional pada hotel"
  },

  pragmatics: {
    category_en: "Marketing & Digital Reputation",
    category_id: "Pemasaran & Reputasi Digital",
    title_en: "Applying Linguistic Pragmatics to Hotel Branding & Social Engagement",
    title_id: "Menerapkan Riset Pragmatik Bahasa pada Branding & Reputasi Digital Hotel",
    context_en: "The hotel seeks to enhance guest engagement on digital platforms (TikTok / Instagram) and elevate response rates on online travel reviews (OTAs).",
    context_id: "Manajemen hotel ingin meningkatkan keterlibatan tamu di media sosial (TikTok / Instagram) serta menaikkan kualitas respon ulasan di platform reservasi (OTA).",
    steps_en: [
      {
        num: "1",
        title: "Persuasive Linguistic Framing",
        desc: "Leveraging thesis insights on pragmatic speech acts to craft invitations and promotional content that trigger organic emotional resonance rather than pushy sales."
      },
      {
        num: "2",
        title: "Empathetic Review Responses",
        desc: "Formulating custom, non-robotic replies to guest feedback on Google / TripAdvisor that validate emotions and highlight service commitments."
      },
      {
        num: "3",
        title: "Brand Voice Alignment",
        desc: "Maintaining consistency between frontline personal warmth and digital messaging, ensuring guests encounter the same hospitable warmth online and on-property."
      }
    ],
    steps_id: [
      {
        num: "1",
        title: "Penyusunan Bahasa Persuasif (Speech Acts)",
        desc: "Menerapkan temuan skripsi pragmatik untuk menyusun ajakan dan konten promosi yang membangun kedekatan emosional serta rasa percaya audiens, bukan sekadar jualan agresif."
      },
      {
        num: "2",
        title: "Respon Ulasan yang Empatik & Alami",
        desc: "Menyusun tanggapan ulasan tamu di Google/TripAdvisor/OTA yang tulus dan tidak kaku, menghargai masukan tamu dan memperkuat citra kepedulian hotel."
      },
      {
        num: "3",
        title: "Konsistensi Nada Suara Brand (Brand Voice)",
        desc: "Menyelaraskan kehangatan keramahan di meja resepsionis dengan komunikasi di media sosial sehingga tamu merasakan keramahan bintang 5 yang konsisten."
      }
    ],
    framework_en: "Pragmatic Politeness Maxims & Audience Psychology",
    framework_id: "Maksim Kesantunan Pragmatik & Psikologi Audiens",
    outcome_en: "Boosts online review sentiment, follower engagement, and direct booking conversion",
    outcome_id: "Meningkatkan kepuasan ulasan online, interaksi pengikut, dan konversi reservasi langsung"
  }
};

// --- 3. STATE MANAGEMENT ---
let currentLang = 'en';
let currentScenario = 'vip';
let isSpeaking = false;
let speechSynth = window.speechSynthesis;
let currentUtterance = null;

// --- 4. INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
  // Check stored language preference
  const savedLang = localStorage.getItem('mr_lang');
  if (savedLang && (savedLang === 'en' || savedLang === 'id')) {
    currentLang = savedLang;
  }
  updateLanguageUI();

  // Check stored theme preference
  const savedTheme = localStorage.getItem('mr_theme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);

  // Initialize Simulator
  renderScenario(currentScenario);

  // Setup Event Listeners
  setupNavigation();
  setupLanguageToggle();
  setupThemeToggle();
  setupSimulatorTabs();
  setupVoiceIntro();
  setupContactForm();
  setupCopyButtons();
  setupScrollEffects();
});

// --- 5. LANGUAGE SWITCHER ---
function setupLanguageToggle() {
  const toggleBtn = document.getElementById('lang-toggle');
  toggleBtn.addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'id' : 'en';
    localStorage.setItem('mr_lang', currentLang);
    updateLanguageUI();
    renderScenario(currentScenario);
    showToast(currentLang === 'en' ? 'Language switched to English' : 'Bahasa diganti ke Bahasa Indonesia');
    
    // Stop any speech in progress
    if (isSpeaking) {
      stopVoice();
    }
  });
}

function updateLanguageUI() {
  const langText = document.getElementById('current-lang-text');
  if (langText) {
    langText.textContent = currentLang.toUpperCase();
  }

  // Update all elements with data-i18n attribute
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[currentLang] && translations[currentLang][key]) {
      el.textContent = translations[currentLang][key];
    }
  });

  // Update dynamic placeholders
  const nameInput = document.getElementById('form-name');
  const emailInput = document.getElementById('form-email');
  const msgInput = document.getElementById('form-message');
  if (nameInput) {
    nameInput.placeholder = currentLang === 'en' ? 'e.g. Grand Heritage Hotel HR' : 'cth. HRD Hotel Grand Heritage';
  }
  if (emailInput) {
    emailInput.placeholder = currentLang === 'en' ? 'e.g. hr@luxuryresort.com' : 'cth. hrd@luxuryresort.com';
  }
  if (msgInput) {
    msgInput.placeholder = currentLang === 'en' ? 'Dear Muhammad Roihan, we would like to invite you...' : 'Yth. Muhammad Roihan, kami ingin mengundang Anda...';
  }

  // Document title
  document.title = currentLang === 'en' 
    ? "Muhammad Roihan | Hospitality & Guest Relations Specialist" 
    : "Muhammad Roihan | Spesialis Front Office & Hospitality";
}

// --- 6. LUXURY THEME TOGGLE ---
function setupThemeToggle() {
  const themeBtn = document.getElementById('theme-toggle');
  themeBtn.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('mr_theme', newTheme);
    updateThemeIcon(newTheme);
    showToast(newTheme === 'dark' ? 'Midnight Luxury Dark Mode' : 'Executive Light Mode');
  });
}

function updateThemeIcon(theme) {
  const icon = document.getElementById('theme-icon');
  if (!icon) return;
  if (theme === 'dark') {
    icon.className = 'fa-solid fa-moon';
  } else {
    icon.className = 'fa-solid fa-sun';
  }
}

// --- 7. SIMULATOR LOGIC ---
function setupSimulatorTabs() {
  const tabs = document.querySelectorAll('.sim-tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');
      currentScenario = tab.getAttribute('data-scenario');
      renderScenario(currentScenario);
    });
  });
}

function renderScenario(scenarioKey) {
  const data = scenarioData[scenarioKey];
  if (!data) return;

  const categoryEl = document.getElementById('sim-category');
  const titleEl = document.getElementById('sim-scenario-title');
  const contextDescEl = document.getElementById('sim-context-desc');
  const stepsEl = document.getElementById('sim-steps');
  const frameworkEl = document.getElementById('sim-framework-val');
  const outcomeEl = document.getElementById('sim-outcome-val');

  categoryEl.textContent = currentLang === 'en' ? data.category_en : data.category_id;
  titleEl.textContent = currentLang === 'en' ? data.title_en : data.title_id;
  contextDescEl.textContent = currentLang === 'en' ? data.context_en : data.context_id;
  frameworkEl.textContent = currentLang === 'en' ? data.framework_en : data.framework_id;
  outcomeEl.textContent = currentLang === 'en' ? data.outcome_en : data.outcome_id;

  // Render steps
  const steps = currentLang === 'en' ? data.steps_en : data.steps_id;
  stepsEl.innerHTML = '';
  steps.forEach(step => {
    const stepDiv = document.createElement('div');
    stepDiv.className = 'sim-step-item';
    stepDiv.innerHTML = `
      <div class="step-num">${step.num}</div>
      <div class="step-content">
        <strong>${step.title}</strong>
        <p>${step.desc}</p>
      </div>
    `;
    stepsEl.appendChild(stepDiv);
  });
}

// --- 8. VOICE INTRODUCTION (WEB SPEECH API) ---
function setupVoiceIntro() {
  const voiceBtn = document.getElementById('play-voice-btn');
  const statusEl = document.getElementById('voice-status');

  if (!('speechSynthesis' in window)) {
    if (voiceBtn) {
      voiceBtn.style.display = 'none';
      if (statusEl) statusEl.textContent = 'Speech synthesis not supported in this browser';
    }
    return;
  }

  voiceBtn.addEventListener('click', () => {
    if (isSpeaking) {
      stopVoice();
    } else {
      playVoice();
    }
  });
}

function playVoice() {
  const voiceBtn = document.getElementById('play-voice-btn');
  const btnText = document.getElementById('voice-btn-text');
  const icon = document.getElementById('voice-icon');
  const statusEl = document.getElementById('voice-status');

  speechSynth.cancel(); // Reset any ongoing utterances

  const introTextEn = "Hello! I am Muhammad Roihan, an English Education graduate with a 3.61 GPA and a 557 TOEFL score. I specialize in Front Office and guest relations, delivering personalized hospitality with warmth, active listening, and persuasive communication. Welcome to my portfolio!";
  const introTextId = "Halo! Saya Muhammad Roihan, sarjana Pendidikan Bahasa Inggris dengan IPK 3.61 dan skor TOEFL 557. Saya berfokus pada bidang Front Office dan relasi tamu, menghadirkan pelayanan hospitality dengan kehangatan, mendengarkan aktif, dan komunikasi persuasif. Selamat datang di portofolio saya!";

  const textToSpeak = currentLang === 'en' ? introTextEn : introTextId;
  currentUtterance = new SpeechSynthesisUtterance(textToSpeak);
  currentUtterance.lang = currentLang === 'en' ? 'en-US' : 'id-ID';
  currentUtterance.rate = 0.95;
  currentUtterance.pitch = 1.0;

  currentUtterance.onstart = () => {
    isSpeaking = true;
    voiceBtn.classList.add('speaking');
    icon.className = 'fa-solid fa-stop';
    btnText.textContent = translations[currentLang]['voice-stop'];
    statusEl.textContent = translations[currentLang]['voice-status-speaking'];
  };

  currentUtterance.onend = () => {
    stopVoice();
  };

  currentUtterance.onerror = () => {
    stopVoice();
  };

  speechSynth.speak(currentUtterance);
}

function stopVoice() {
  if (speechSynth) {
    speechSynth.cancel();
  }
  isSpeaking = false;
  const voiceBtn = document.getElementById('play-voice-btn');
  const btnText = document.getElementById('voice-btn-text');
  const icon = document.getElementById('voice-icon');
  const statusEl = document.getElementById('voice-status');

  if (voiceBtn) voiceBtn.classList.remove('speaking');
  if (icon) icon.className = 'fa-solid fa-volume-high';
  if (btnText) btnText.textContent = translations[currentLang]['voice-play'];
  if (statusEl) statusEl.textContent = translations[currentLang]['voice-status-ready'];
}

// --- 9. CONTACT FORM & WHATSAPP INTERACTION ---
function setupContactForm() {
  const form = document.getElementById('contact-form');
  const waBtn = document.getElementById('whatsapp-quick-btn');

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('form-name').value;
      const email = document.getElementById('form-email').value;
      const subject = document.getElementById('form-subject').value;
      const message = document.getElementById('form-message').value;

      const mailtoUrl = `mailto:muhammadroihan127@gmail.com?subject=${encodeURIComponent(subject + ' - ' + name)}&body=${encodeURIComponent("Sender: " + name + "\nEmail: " + email + "\n\n" + message)}`;
      window.location.href = mailtoUrl;

      showToast(currentLang === 'en' ? 'Opening email client...' : 'Membuka aplikasi email...');
    });
  }

  if (waBtn) {
    waBtn.addEventListener('click', () => {
      const name = document.getElementById('form-name')?.value || '';
      const subject = document.getElementById('form-subject')?.value || 'Hospitality Inquiry';
      const greeting = currentLang === 'en'
        ? `Hello Muhammad Roihan, my name is ${name || 'a recruiter'}. I am reaching out regarding: ${subject}.`
        : `Halo Muhammad Roihan, nama saya ${name || 'rekruter'}. Saya ingin berdiskusi mengenai: ${subject}.`;

      const waUrl = `https://wa.me/6289516563430?text=${encodeURIComponent(greeting)}`;
      window.open(waUrl, '_blank');
      showToast(currentLang === 'en' ? 'Connecting to WhatsApp...' : 'Membuka WhatsApp...');
    });
  }
}

// --- 10. CLIPBOARD COPY UTILITIES ---
function setupCopyButtons() {
  const copyButtons = document.querySelectorAll('.copy-btn');
  copyButtons.forEach(btn => {
    const textToCopy = btn.getAttribute('data-copy');
    if (!textToCopy) return;

    btn.addEventListener('click', () => {
      navigator.clipboard.writeText(textToCopy).then(() => {
        showToast(currentLang === 'en' ? `Copied: ${textToCopy}` : `Tersalin: ${textToCopy}`);
      }).catch(() => {
        showToast(currentLang === 'en' ? 'Copy failed' : 'Gagal menyalin');
      });
    });
  });
}

// --- 11. NAVIGATION & SCROLL EFFECTS ---
function setupNavigation() {
  const mobileToggle = document.getElementById('mobile-toggle');
  const navLinks = document.getElementById('nav-links');
  const navbar = document.getElementById('navbar');
  const backToTop = document.getElementById('back-to-top');

  // Mobile menu toggle
  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = navLinks.classList.toggle('open');
      mobileToggle.classList.toggle('active', isOpen);

      if (navbar) {
        const navRect = navbar.getBoundingClientRect();
        navLinks.style.top = `${navRect.bottom}px`;
      }
    });

    // Close mobile menu on clicking any link
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        mobileToggle.classList.remove('active');
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (navbar && !navbar.contains(e.target) && navLinks.classList.contains('open')) {
        navLinks.classList.remove('open');
        mobileToggle.classList.remove('active');
      }
    });

    // Update position on resize or scroll
    window.addEventListener('resize', () => {
      if (window.innerWidth > 768 && navLinks.classList.contains('open')) {
        navLinks.classList.remove('open');
        mobileToggle.classList.remove('active');
      }
    });
  }

  // Back to top button
  if (backToTop) {
    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}

function setupScrollEffects() {
  const progressBar = document.getElementById('scroll-progress');
  const navbar = document.getElementById('navbar');
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links .nav-item');

  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;

    if (progressBar) {
      progressBar.style.width = `${scrollPercent}%`;
    }

    if (navbar) {
      if (scrollTop > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }

    // Scroll spy
    let currentSection = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      if (scrollTop >= sectionTop) {
        currentSection = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSection}`) {
        link.classList.add('active');
      }
    });
  });
}

// --- 12. TOAST NOTIFICATION HELPER ---
let toastTimeout;
function showToast(message) {
  const toast = document.getElementById('toast');
  if (!toast) return;

  toast.textContent = message;
  toast.classList.add('show');

  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toast.classList.remove('show');
  }, 3200);
}
