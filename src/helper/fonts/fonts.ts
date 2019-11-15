import path from "path";

const Fonts = (name: string, extension: string) => `
/* vietnamese */
@font-face {
  font-family: '${name}';
  font-style: normal;
  font-weight: 200;
  font-display: swap;
  src:  url('${path.resolve(__dirname, `../../fonts/${name}/${name}-ExtraLight.${extension}`)}') format('${extension}');
}
/* latin-ext */
@font-face {
  font-family: '${name}';
  font-style: normal;
  font-weight: 200;
  font-display: swap;
  src:  url('${path.resolve(__dirname, `../../fonts/${name}/${name}-ExtraLight.${extension}`)}') format('${extension}');
}
/* latin */
@font-face {
  font-family: '${name}';
  font-style: normal;
  font-weight: 200;
  font-display: swap;
  src:  url('${path.resolve(__dirname, `../../fonts/${name}/${name}-ExtraLight.${extension}`)}') format('${extension}');
}
/* vietnamese */
@font-face {
  font-family: '${name}';
  font-style: normal;
  font-weight: 300;
  font-display: swap;
  src: url('${path.resolve(__dirname, `../../fonts/${name}/${name}-Light.${extension}`)}') format('${extension}');
}
/* latin-ext */
@font-face {
  font-family: '${name}';
  font-style: normal;
  font-weight: 300;
  font-display: swap;
  src: url('${path.resolve(__dirname, `../../fonts/${name}/${name}-Light.${extension}`)}') format('${extension}');
}
/* latin */
@font-face {
  font-family: '${name}';
  font-style: normal;
  font-weight: 300;
  font-display: swap;
  src: url('${path.resolve(__dirname, `../../fonts/${name}/${name}-Light.${extension}`)}') format('${extension}');
}
/* vietnamese */
@font-face {
  font-family: '${name}';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url('${path.resolve(__dirname, `../../fonts/${name}/${name}-Regular.${extension}`)}') format('${extension}');
}
/* latin-ext */
@font-face {
  font-family: '${name}';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url('${path.resolve(__dirname, `../../fonts/${name}/${name}-Regular.${extension}`)}') format('${extension}');
}
/* latin */
@font-face {
  font-family: '${name}';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url('${path.resolve(__dirname, `../../fonts/${name}/${name}-Regular.${extension}`)}') format('${extension}');
}
/* vietnamese */
@font-face {
  font-family: '${name}';
  font-style: normal;
  font-weight: 600;
  font-display: swap;
  src: url('${path.resolve(__dirname, `../../fonts/${name}/${name}-SemiBold.${extension}`)}') format('${extension}');
}
/* latin-ext */
@font-face {
  font-family: '${name}';
  font-style: normal;
  font-weight: 600;
  font-display: swap;
  src: url('${path.resolve(__dirname, `../../fonts/${name}/${name}-SemiBold.${extension}`)}') format('${extension}');
}
/* latin */
@font-face {
  font-family: '${name}';
  font-style: normal;
  font-weight: 600;
  font-display: swap;
  src: url('${path.resolve(__dirname, `../../fonts/${name}/${name}-SemiBold.${extension}`)}') format('${extension}');
}
/* vietnamese */
@font-face {
  font-family: '${name}';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src:  url('${path.resolve(__dirname, `../../fonts/${name}/${name}-Bold.${extension}`)}') format('${extension}');
}
/* latin-ext */
@font-face {
  font-family: '${name}';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src:  url('${path.resolve(__dirname, `../../fonts/${name}/${name}-Bold.${extension}`)}') format('${extension}');
}
/* latin */
@font-face {
  font-family: '${name}';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src:  url('${path.resolve(__dirname, `../../fonts/${name}/${name}-Bold.${extension}`)}') format('${extension}');
}

/* vietnamese */
@font-face {
  font-family: '${name}';
  font-style: normal;
  font-weight: 800;
  font-display: swap;
  src:  url('${path.resolve(__dirname, `../../fonts/${name}/${name}-ExtraBold.${extension}`)}') format('${extension}');
}
/* latin-ext */
@font-face {
  font-family: '${name}';
  font-style: normal;
  font-weight: 800;
  font-display: swap;
  src:  url('${path.resolve(__dirname, `../../fonts/${name}/${name}-ExtraBold.${extension}`)}') format('${extension}');
}
/* latin */
@font-face {
  font-family: '${name}';
  font-style: normal;
  font-weight: 800;
  font-display: swap;
  src:  url('${path.resolve(__dirname, `../../fonts/${name}/${name}-ExtraBold.${extension}`)}') format('${extension}');
}


/* vietnamese */
@font-face {
  font-family: '${name}';
  font-style: normal;
  font-weight: 900;
  font-display: swap;
  src: url('${path.resolve(__dirname, `../../fonts/${name}/${name}-Black.${extension}`)}') format('${extension}');
}
/* latin-ext */
@font-face {
  font-family: '${name}';
  font-style: normal;
  font-weight: 900;
  font-display: swap;
  src: url('${path.resolve(__dirname, `../../fonts/${name}/${name}-Black.${extension}`)}') format('${extension}');
}
/* latin */
@font-face {
  font-family: '${name}';
  font-style: normal;
  font-weight: 900;
  font-display: swap;
  src: url('${path.resolve(__dirname, `../../fonts/${name}/${name}-Black.${extension}`)}') format('${extension}');
}
`;
// tslint:disable-next-line: no-default-export
export default Fonts;
