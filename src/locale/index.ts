import danish from './da'
import english from "./en"
import swedish from "./sv"
import german from "./de"
import norwegian from "./no"
import i18n from 'i18n-js'


i18n.translations={
    da:danish,
    en:english,
    no:norwegian,
    sv:swedish,
    de:german
}

export const translator=i18n;