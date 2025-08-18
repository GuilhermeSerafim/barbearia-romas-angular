# <img src="https://www.thexperiencebb.com/img/loading.gif" alt="Astronomo" width="50" height="50"> [Barbearia ROMAS](https://barbearia-romas-angular.vercel.app)

Aplicação em produção em **Angular/TypeScript**: **landing page pública** e **área administrativa** para gestão de **agendamentos** e **galeria**.
Front-end em Angular; integração **REST** com back-end **Node.js + MongoDB**; **loaders** para mitigar *cold start* e preservar a UX.

> 📌 Este projeto é uma evolução em Angular de uma versão anterior em [HTML/CSS](https://github.com/GuilhermeSerafim/barbearia-romas).

---

## 🎨 Protótipo no Figma

🔗 [Visualizar no Figma](https://www.figma.com/design/y2kRUAvkGo18AS7Ni7oMiR/Barbearia?node-id=0-1&t=Nn3EAWp13rkXZ2Wh-1)

---

## 📂 Funcionalidades

### 🌐 Landing Page (pública)

* Seções: **Hero**, **Serviços**, **Galeria**, **Quem Somos**, **Localização** e **Contato**.
* **Design responsivo** (Mobile, Tablet, Desktop) e identidade visual consistente.
* **Galeria** alimentada pelo módulo administrativo.

### 🔐 Área Administrativa

* **Rota protegida:** `/admin/login` (visualização e/ou autenticação).
* **Agendamentos:** CRUD de serviços, clientes e datas, com validações.
* **Galeria:** cadastro/gestão de imagens e descrições, refletindo na landing.
* **Feedback de carregamento (loaders):** tratamento de latência de *cold start* do back-end para manter a percepção de performance.

---

## 🛠️ Tecnologias e Ferramentas

* **Front-end:** Angular (TypeScript), Angular Router, HTML5, SCSS
* **Back-end (produção):** Node.js, MongoDB (APIs REST)
* **Mock (dev):** JSON Server (para testes locais de CRUD)
* **Deploy:** Vercel

---

## 🏗️ Arquitetura & Boas Práticas

* Estrutura **modular** por features e **roteamento protegido** (route guards).
* Componentização, separação de responsabilidades e **Clean Code**.
* Integração com APIs via serviços Angular (**HttpClient**), tratamento de erro e estados de carregamento.

---

## 🌐 Produção

* Host: **Vercel**
* URL: **[https://barbearia-romas-angular.vercel.app](https://barbearia-romas-angular.vercel.app)**

---

## 📫 Contato

Dúvidas, sugestões ou novas features? Abra uma **issue** ou conecte comigo no LinkedIn.

---
