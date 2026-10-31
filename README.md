# <img src="https://www.thexperiencebb.com/img/loading.gif" alt="Astronomo" width="50" height="50"> [Barbearia ROMAS](https://barbearia-romas-angular.vercel.app)

Frontend em **Angular/TypeScript**: **landing page pública** e **área administrativa** para gestão de **agendamentos** e **galeria**.
Front-end em Angular; integração **REST** com back-end **Node.js + MongoDB**; **loaders** para mitigar *cold start* e preservar a UX.

> 📌 Este projeto é uma evolução em Angular de uma versão anterior em [HTML/CSS](https://github.com/GuilhermeSerafim/barbearia-romas).

---

## 🎨 Protótipo no Figma

🔗 [Visualizar no Figma](https://www.figma.com/design/y2kRUAvkGo18AS7Ni7oMiR/Barbearia?node-id=0-1&t=Nn3EAWp13rkXZ2Wh-1)

---

## 📂 Funcionalidades

### 🌐 Landing Page (pública)

* Seções: **Hero**, **Serviços**, **Galeria**, **Quem Somos**, **Localização** e **Contato**.
* Layout pensado para diferentes tamanhos de tela, com a identidade visual da barbearia.
* **Galeria** alimentada pelo módulo administrativo.

### 🔐 Área Administrativa

* **Tela de login:** `/adm/login`. As rotas administrativas não têm `canActivate` configurado.
* **Agendamentos:** CRUD de serviços, clientes e datas, com validações.
* **Galeria:** cadastro/gestão de imagens e descrições, refletindo na landing.
* **Feedback de carregamento (loaders):** tratamento de latência de *cold start* do back-end para manter a percepção de performance.

---

## 🛠️ Tecnologias e Ferramentas

* **Front-end:** Angular (TypeScript), Angular Router, HTML5, CSS
* **Back-end:** integração REST com API Node.js/MongoDB.
* **Mock local:** JSON Server não consta nas dependências; o frontend depende de uma API compatível.
* **Deploy:** Vercel

---

## 🏗️ Arquitetura & Boas Práticas

* Organização por componentes, páginas e serviços. Há um `AuthGuard` que consulta `isAdmin` no localStorage, mas o array de rotas não o aplica; isso não constitui garantia de proteção do backend.
* Componentização e separação entre páginas e serviços.
* Integração com APIs via serviços Angular (**HttpClient**), tratamento de erro e estados de carregamento.

---

## 🌐 Link publicado na documentação

* Host: **Vercel**
* URL: **[https://barbearia-romas-angular.vercel.app](https://barbearia-romas-angular.vercel.app)**

---

## 📫 Contato

Dúvidas, sugestões ou novas features? Abra uma **issue** ou conecte comigo no LinkedIn.

---

## Integração e limites de reprodução

Os serviços `admin.service.ts` e `agendamentos.service.ts` apontam diretamente para `https://barbearia-romas-api.onrender.com`. Para desenvolvimento local, configure um backend próprio e ajuste esse endereço antes de usar as operações administrativas.

O manifesto contém os scripts `start`, `build` e `test`. O script `fix:ids` aponta para `scripts/fix-ids.js`, que não está no repositório. A tela de login e o estado em localStorage não substituem autorização no backend.
