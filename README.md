# Awesome Linktree

Este repositorio te permite crear tu propia página de enlaces al estilo Linktree, utilizando archivos Markdown y personalizándolo fácilmente. A continuación encontrarás los pasos para hacer un fork, los prerequisitos, la configuración y cómo añadir tus propios enlaces e iconos.

---

## 1. Haz un Fork del Repositorio

Haz clic en el botón **Fork** en la parte superior derecha de esta página para crear una copia de este repositorio en tu cuenta de GitHub.

---

## 2. Prerrequisitos

- Tener una cuenta en GitHub.
- Conocimientos básicos de edición de archivos Markdown (`.md`).
- Opcional: Saber hacer deploy en GitHub Pages para publicar tu Linktree.

---

## 3. Configuración Inicial

### a. Clona tu Fork

```bash
git clone https://github.com/tu-usuario/awesome-linktree.git
cd awesome-linktree
```

### b. Personaliza tu Información

1. **Edita el archivo `profile/you.md`**  
   Este archivo es tu tarjeta de presentación. Aquí puedes poner tu nombre, una breve biografía, foto, etc. Ábrelo y reemplaza los datos de ejemplo por los tuyos.

2. **Agrega tus Enlaces**

   - Para cada enlace, crea un archivo nuevo `.md` basado en el archivo `link-template.md` en la carpeta `content/links`.
   - Renombra el archivo para que tenga sentido (por ejemplo, `github.md`, `twitter.md`, etc).
   - Completa los campos del template con la información de tu enlace: título, URL, descripción, e ícono.

   **Ejemplo:**
   ```markdown
   ---
   title: GitHub
   url: https://github.com/tu-usuario
   icon: mdi:github
   description: ¡Sígueme en GitHub!
   ---
   ```

---

## 4. Añadir Iconos

Los iconos se obtienen desde [Iconify - Material Design Icons](https://icon-sets.iconify.design/mdi/).

- Busca el icono que deseas usar.
- Copia el nombre del icono (por ejemplo, `mdi:twitter`).
- Pega ese nombre en el campo `icon` de tu archivo `.md`.

---

## 5. Publicar tu Linktree (Opcional)

Si quieres publicar tu Linktree, puedes usar **GitHub Pages**:

1. Ve a la configuración de tu repositorio (`Settings > Pages`).
2. Selecciona la rama principal y la carpeta `/root` o `/docs` según tu setup.
3. ¡Listo! Tendrás tu Linktree online en la URL de GitHub Pages.

---

## 6. Créditos

Iconos por [Iconify](https://icon-sets.iconify.design/mdi/).

---

¡Personaliza, comparte y haz crecer tu árbol de enlaces!
