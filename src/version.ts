import { version } from '../package.json'

const title = document.querySelector("title") as HTMLTitleElement;

title.innerHTML += ` // v.${version}`