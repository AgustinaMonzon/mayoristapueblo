# 🛒 Tienda Pueblo

[![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000000?style=flat-square&logo=vercel)](https://tiendapueblo.com.ar)
[![PWA](https://img.shields.io/badge/PWA-Enabled-00A8E8?style=flat-square)](https://tiendapueblo.com.ar)
[![License](https://img.shields.io/badge/License-Propietario-green?style=flat-square)](LICENSE)

> **Tienda online mayorista de tecnología, hogar y accesorios. Pedidos rápidos por WhatsApp.**

🌐 **Sitio en vivo:** [tiendapueblo.com.ar](https://tiendapueblo.com.ar)

---

## 📋 Tabla de Contenidos

- [✨ Características](#-características)
- [🛠️ Tecnologías](#-tecnologías)
- [📁 Estructura del Proyecto](#-estructura-del-proyecto)
- [🚀 Instalación y Uso](#-instalación-y-uso)
- [📱 PWA - App Instalable](#-pwa---app-instalable)
- [🔍 SEO y Posicionamiento](#-seo-y-posicionamiento)
- [📦 Agregar Productos](#-agregar-productos)
- [🔧 Configuración](#-configuración)
- [🤝 Contribuir](#-contribuir)
- [📞 Contacto](#-contacto)
- [📄 Licencia](#-licencia)

---

## ✨ Características

### 🛒 Funcionalidades de Tienda

- ✅ **Catálogo de ~180 productos** organizados en 17 categorías
- ✅ **Búsqueda en tiempo real** con normalización de texto (sin tildes)
- ✅ **Filtros por categoría** con scroll horizontal en móvil
- ✅ **Ordenamiento por precio** (menor/mayor)
- ✅ **Sistema de favoritos** con persistencia en localStorage
- ✅ **Carrito de compras** con persistencia entre sesiones
- ✅ **Selector de cantidad** por producto
- ✅ **Modal de producto ampliado** con descripción detallada
- ✅ **Badge de oferta animado** para productos en promoción
- ✅ **Manejo de stock** (productos agotados deshabilitados)
- ✅ **Productos "a consultar"** para líneas de celulares

### 📱 Experiencia de Usuario

- ✅ **Diseño 100% responsive** (móvil, tablet, desktop)
- ✅ **Carrito flotante en móvil** con badge de cantidad
- ✅ **Botón "Volver arriba"** con scroll suave
- ✅ **Loading overlay animado** con logo
- ✅ **Animaciones y micro-interacciones** (hover, pop, fade)
- ✅ **Scrollbars personalizados** e invisibles
- ✅ **Accesibilidad básica** con focus visible

### 💬 Pedidos por WhatsApp

- ✅ **Integración directa con WhatsApp Business**
- ✅ **Mensaje de pedido estructurado** con:
  - ID de producto para identificación
  - Cantidad × Nombre × Precio
  - Subtotal por línea y total general
  - Fecha automática
  - Nota de confirmación de precios/stock
- ✅ **Compatibilidad móvil y desktop**

### 🔧 Técnicas

- ✅ **Progressive Web App (PWA)** instalable
- ✅ **Service Worker** con estrategia network-first + fallback offline
- ✅ **Cache versionado** para actualizaciones limpias
- ✅ **Manifest.json** configurado para instalación
- ✅ **SEO optimizado** con meta tags y Schema.org
- ✅ **Open Graph y Twitter Cards** para compartir en redes
- ✅ **Preload de recursos críticos** para mejor performance
- ✅ **Tailwind CSS via CDN** para estilos rápidos

---

## 🛠️ Tecnologías

| Tecnología | Propósito |
| :--- | :--- |
| **HTML5** | Estructura semántica |
| **CSS3 + Tailwind CSS** | Estilos y responsive design |
| **JavaScript (Vanilla)** | Lógica de negocio sin frameworks |
| **WebP** | Imágenes optimizadas |
| **Service Worker API** | Funcionalidad offline PWA |
| **localStorage** | Persistencia de carrito y favoritos |
| **WhatsApp Business API** | Pedidos vía WhatsApp |
| **Vercel** | Hosting y deploy automático |
| **GitHub** | Control de versiones |

---

## 📁 Estructura del Proyecto

```
mayoristapueblo/
├── 📄 index.html              # Página principal (SPA)
├── 🎨 style.css               # Estilos personalizados
├── 📦 productos.js            # Catálogo de productos (~180 items)
├── ⚙️ service-worker.js       # PWA offline capabilities
├── 📱 manifest.json           # Configuración PWA
├── 🖼️ logo.webp               # Logo de la tienda
├── 🔐 google*.html            # Verificación Google Search Console
├── 🗺️ sitemap.xml            # Sitemap para SEO
├── 📄 README.md               # Este archivo
│
├── 📂 fotos/                  # Imágenes de productos
│   ├── BELLEZA/
│   ├── HOGAR/
│   ├── DECO/
│   ├── PARLANTES/
│   ├── MICROFONOS/
│   ├── AURICULARES/
│   ├── INFORMÁTICA/
│   ├── JUGUETES/
│   ├── LIBRERIA/
│   ├── ACCESORIOSCELULARES/
│   ├── PROYECTORES/
│   ├── CABLES/
│   ├── RELOJES/
│   ├── CARGADORES/
│   ├── CELULARES/
│   ├── DEPORTIVO/
│   └── VARIOS/
│
└── 🔧 .gitignore              # Archivos ignorados por Git
```

---

## 🚀 Instalación y Uso

### Para desarrollo local

1. **Clonar el repositorio:**

```bash
git clone https://github.com/AgustinaMonzon/mayoristapueblo.git
cd mayoristapueblo
```

2. **Abrir en navegador:**

```bash
# Opción A: Abrir directamente
open index.html

# Opción B: Usar servidor local (recomendado para PWA)
npx serve .
# o
python -m http.server 8000
```

3. **Acceder a:** `http://localhost:8000` (o el puerto que uses)

### Para producción

El sitio está desplegado automáticamente en **Vercel** al hacer push a `main`:

```bash
git add .
git commit -m "✨ Nueva feature: descripción"
git push origin main
# → Deploy automático en https://tiendapueblo.com.ar
```

---

## 📱 PWA - App Instalable

Tu tienda puede instalarse como aplicación nativa:

### 📲 En Android (Chrome)

1. Abrir [tiendapueblo.com.ar](https://tiendapueblo.com.ar)
2. Menú ⋮ → "Agregar a la pantalla de inicio"
3. Confirmar instalación

### 📲 En iOS (Safari)

1. Abrir [tiendapueblo.com.ar](https://tiendapueblo.com.ar)
2. Botón Compartir 📤 → "Agregar a inicio"
3. Confirmar instalación

### ✅ Características PWA

- 🔄 Funciona offline (productos ya visitados)
- 🎨 Icono personalizado en el launcher
- 📱 Pantalla completa sin barra de navegador
- ⚡ Carga rápida con cache estratégico
- 🔄 Actualizaciones automáticas al cambiar versión

### 🔧 Configurar versión de cache

```javascript
// En service-worker.js
const CACHE_NAME = "mayorista-pueblo-v4"; // ↑ Incrementar para forzar actualización
```

---

## 🔍 SEO y Posicionamiento

### ✅ Meta Tags Implementados

```html
<title>Tienda Pueblo | Tecnología, Hogar y Accesorios - Pedidos por WhatsApp</title>
<meta name="description" content="Tienda Pueblo: Mayorista de tecnología, hogar, belleza y más...">
<meta name="keywords" content="tienda pueblo, mayorista, tecnología, hogar...">
<link rel="canonical" href="https://tiendapueblo.com.ar/">
```

### ✅ Open Graph (Redes Sociales)

```html
<meta property="og:title" content="Tienda Pueblo | Tecnología y Hogar">
<meta property="og:image" content="https://tiendapueblo.com.ar/logo.webp">
<meta property="og:url" content="https://tiendapueblo.com.ar/">
```

### ✅ Schema.org (Datos Estructurados)

```json
{
  "@type": "Store",
  "name": "Tienda Pueblo",
  "telephone": "+543413261010",
  "address": { "@type": "PostalAddress", "addressCountry": "AR" },
  "openingHours": "Mo-Sa 09:00-18:00"
}
```

### 📊 Verificar SEO

- **Google Search Console:** [tiendapueblo.com.ar](https://search.google.com/search-console)
- **Rich Results Test:** [search.google.com/test/rich-results](https://search.google.com/test/rich-results)
- **Lighthouse:** DevTools → Lighthouse → "Progressive Web App"

---

## 📦 Agregar Productos

### Estructura de un producto en `productos.js`

```javascript
{
  id: 'COD01',                    // Código único (3-6 caracteres)
  nombre: 'NOMBRE DEL PRODUCTO',  // Nombre visible
  precio: 25000,                  // Precio en pesos argentinos
  precioAnterior: 35000,          // Precio tachado (opcional, 0 si no hay oferta)
  cat: 'CATEGORIA',               // Debe coincidir con botón de filtro
  foto: 'fotos/CATEGORIA/1.webp', // Ruta de la imagen
  oferta: true,                   // Muestra badge "OFERTA!" si es true
  stock: true,                    // false = muestra "Agotado"
  descripcion: 'Texto...\n\n• Item 1\n• Item 2' // Descripción para modal (opcional)
}
```

### 🗂️ Categorías disponibles

```
BELLEZA | HOGAR | DECO | PARLANTES | MICROFONOS | AURICULARES
INFORMÁTICA | JUGUETES | LIBRERIA | ACCESORIOS_CELULARES
PROYECTORES | CABLES | RELOJES | CARGADORES | CELULARES
DEPORTIVO | VARIOS | SALE
```

### 💡 Tips para productos

- ✅ Usar **imágenes WebP** optimizadas (< 200KB ideal)
- ✅ Nombres de archivo en **minúsculas** para compatibilidad
- ✅ `precioConsultar: true` para productos sin precio fijo
- ✅ Descripciones con `\n\n•` para saltos de línea en modal

---

## 🔧 Configuración

### 🎨 Colores y temas (`style.css`)

```css
:root {
  --verde-pueblo: #1a5d37;    /* Color principal */
  --verde-hover: #2d6a4f;     /* Hover de botones */
  --whatsapp: #25d366;        /* Verde WhatsApp */
  --oferta: #e11d48;          /* Color de ofertas */
  --borde-suave: #e5e7eb;     /* Bordes sutiles */
  --bg-placeholder: #f9fafb;  /* Fondos secundarios */
}
```

### 📱 WhatsApp Business

```javascript
// En index.html - Actualizar número si cambia
const whatsappUrl = `https://wa.me/543413261010?text=${encodeURIComponent(mensaje)}`;
```

### 🌐 Dominio y DNS

- **Dominio:** `tiendapueblo.com.ar`
- **DNS:** Delegados a `ns1.vercel-dns.com` / `ns2.vercel-dns.com`
- **SSL:** Automático vía Vercel

---

## 🤝 Contribuir

1. Fork el repositorio
2. Crear rama para feature: `git checkout -b feature/nueva-funcion`
3. Commit cambios: `git commit -m '✨ Agregar nueva función'`
4. Push a rama: `git push origin feature/nueva-funcion`
5. Abrir Pull Request

### 📋 Convenciones de commits

```
✨ Agregar nueva feature
🐛 Corregir bug
🎨 Mejorar estilos/UI
🔧 Refactorizar código
📝 Actualizar documentación
🚀 Mejorar performance
🔍 Mejorar SEO
📱 Mejorar PWA
```

---

## 📞 Contacto

- **WhatsApp:** [+54 341 326-1010](https://wa.me/543413261010)
- **Instagram:** [@mayoristapueblo](https://www.instagram.com/mayoristapueblo/)
- **Facebook:** [Mayorista Pueblo](https://www.facebook.com/profile.php?id=61587995854029)
- **Email:** (consultar por WhatsApp)

📍 **Ubicación:** Rosario, Santa Fe, Argentina 🇦🇷

---

## 📄 Licencia

© 2026 **Tienda Pueblo**. Todos los derechos reservados.

Este proyecto es **propiedad privada** de Mayorista Pueblo.
Queda prohibida su reproducción, distribución o uso comercial
sin autorización expresa del titular.

---

## 🙏 Agradecimientos

- [Tailwind CSS](https://tailwindcss.com) - Framework de estilos
- [Vercel](https://vercel.com) - Hosting y deploy
- [Google Search Console](https://search.google.com/search-console) - Herramientas SEO
- [WhatsApp Business](https://business.whatsapp.com) - Integración de pedidos

---

> 💡 **"Hecho con ❤️ en Rosario, Argentina"**

```diff
+ ¡Gracias por visitar Tienda Pueblo!
+ ¿Encontraste algo que te guste? ¡Escríbenos por WhatsApp! 📱✨
```

---

## 🚀 Próximas Mejoras (Backlog)

```
□ Integración con Mercado Pago para pagos online
□ Sistema de seguimiento de pedidos con número de tracking
□ Newsletter para promociones y novedades
□ Reseñas y calificaciones de productos
□ Búsqueda con autocompletado y sugerencias
□ Filtros avanzados (precio, marca, características)
□ Galería de imágenes múltiple por producto
□ Compartir productos en redes sociales
□ Analytics con Google Analytics 4
□ Modo oscuro / tema personalizado
```

---

*Última actualización: Marzo 2026*
*Versión: 1.0.0* 🎉