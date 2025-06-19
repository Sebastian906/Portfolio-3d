import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSelector = () => {
    const { i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <div className="language-selector flex gap-2">
            <button
                onClick={() => changeLanguage('es')}
                className={`px-3 py-1 rounded transition-colors ${
                    i18n.language === 'es' 
                        ? 'bg-slate-800 text-white' 
                        : 'bg-slate-200 text-gray-700 hover:bg-slate-300'
                }`}
            >
                ES
            </button>
            <button
                onClick={() => changeLanguage('en')}
                className={`px-3 py-1 rounded transition-colors ${
                    i18n.language === 'en' 
                        ? 'bg-slate-800 text-white' 
                        : 'bg-slate-200 text-gray-700 hover:bg-slate-300'
                }`}
            >
                EN
            </button>
        </div>
    );
};

export default LanguageSelector;