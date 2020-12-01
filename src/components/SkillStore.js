import html from './assets/html.svg'
import css from './assets/css.svg'
import js from './assets/js.svg'
import php from './assets/php.svg'
import sql from './assets/sql.png'
import android from './assets/android.png'
import reactLogo from './assets/reactlogo.png'
import json from './assets/json.svg'
import bootstrap from './assets/bootstrap.svg'
import git from './assets/git.svg'
import photoshop from './assets/photoshop.svg'
import github from './assets/github.svg'
import illustrator from './assets/illustrator.svg'

var skill_language_store = [
    {
        name: 'HTML5',
        level: 'excelente',
        logo: html
    },
    {
        name: 'JavaScript',
        level: 'bueno',
        logo: js
    },
    {
        name: 'React JS',
        level: 'bueno',
        logo: reactLogo
    },
    {
        name: 'CSS3',
        level: 'excelente',
        logo: css
    },
    {
        name: 'PHP',
        level: 'bueno',
        logo: php
    },
    {
        name: 'Bootstrap & Material UI',
        level: 'excelente',
        logo: bootstrap
    },
    {
        name: 'SQL',
        level: 'bueno',
        logo: sql
    },
    {
        name: 'JSON',
        level: 'bueno',
        logo: json
    },
    {
        name: 'Java Android SDK',
        level: 'medio',
        logo: android
    }
]
var skill_tool_store = [
    {
        name: 'Git',
        level: 'medio',
        logo: git
    },
    {
        name: 'Github',
        level: 'bueno',
        logo: github
    }, {
        name: 'Photoshop',
        level: 'medio',
        logo: photoshop
    }, {
        name: 'Illustrator',
        level: 'malo',
        logo: illustrator
    }
]

export { skill_language_store, skill_tool_store }