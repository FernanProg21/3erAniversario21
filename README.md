# Nuestro libro de aventuras ♡

Una página romántica de aniversario por **3 años juntos**, con estética de álbum de recuerdos inspirado en *Up*. Incluye las fotos, el video y la canción instrumental que compartiste.

## Abrir en Visual Studio Code

1. Descomprime la carpeta completa y ábrela en **Visual Studio Code** (`Archivo → Abrir carpeta`).
2. Abre `index.html`. Si tienes la extensión **Live Server**, haz clic derecho y elige **Open with Live Server**. También puedes abrir `index.html` directamente en tu navegador.
3. Se verá en computadora y celular gracias a su diseño adaptable.

No necesitas instalar Node.js ni ningún paquete.

## Personalizarla

- **Mensajes y títulos:** cambia los textos dentro de `index.html`. Busca frases como «mi niña hermosa», «Una carta para» o «Felices tres años».
- **Colores y tamaños:** están en `styles.css`. Los colores principales se encuentran al comienzo, en `:root`.
- **Fotos:** se guardan en `assets/`. Puedes reemplazar una foto manteniendo el mismo nombre de archivo o cambiar su ruta en `index.html`.
- **Video:** cambia `assets/nuestra-pelicula.mp4` por tu video y, si deseas, `assets/video-portada.jpg` por otra imagen de portada.
- **Música:** el archivo es `assets/nuestra-cancion.mp3`. Puedes reemplazarlo por otro MP3 con el mismo nombre. La música comienza al pulsar **Abrir nuestro libro**; la visitante puede pausarla desde el botón con una nota musical. Cuando el video se reproduce, la canción se pausa para que no se mezclen.
- **Animaciones y botones:** están en `script.js`.

## Compartir por URL

Abrir el archivo desde tu computadora **no** genera un enlace para otras personas. Para que tu enamorada pueda verlo en su celular, la página debe estar publicada en un servicio web (por ejemplo, GitHub Pages, Netlify o un sitio ya desplegado).

Para usar GitHub Pages con este proyecto sencillo, sube el contenido de esta carpeta a la raíz de un repositorio y activa Pages en `Settings → Pages` (rama principal, carpeta `/root`). El enlace resultante suele tardar unos minutos en estar disponible.

**Privacidad y música:** la página contiene fotografías y un video personales. Cualquiera que pueda entrar a una URL pública podría verlos y acceder al audio; comprueba que tienes permiso para compartir la grabación musical. Evita publicar información sensible y comparte el enlace solamente con quien elijas.

## Archivos

```text
index.html         Página y todos los mensajes
styles.css         Diseño, colores y adaptación a celular
script.js          Animación de portada, carta y sorpresa
assets/            11 fotografías, video, portada de video y canción MP3
```

Hecho con muchísimo cariño. ♥
