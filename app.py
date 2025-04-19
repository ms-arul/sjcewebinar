# translator_app.py

import streamlit as st
from transformers import MarianMTModel, MarianTokenizer

# Language codes and directions
language_codes = {
    "English": "en",
    "Tamil": "ta",
    "Hindi": "hi",
    "Malayalam": "ml"
}

# Get model name based on source and target languages
def get_model_name(src_lang, tgt_lang):
    return f"Helsinki-NLP/opus-mt-{src_lang}-{tgt_lang}"

# Translate function
@st.cache_resource
def load_model(src, tgt):
    model_name = get_model_name(src, tgt)
    tokenizer = MarianTokenizer.from_pretrained(model_name)
    model = MarianMTModel.from_pretrained(model_name)
    return tokenizer, model

def translate_text(text, src, tgt):
    tokenizer, model = load_model(src, tgt)
    inputs = tokenizer(text, return_tensors="pt", padding=True, truncation=True)
    translated = model.generate(**inputs)
    return tokenizer.decode(translated[0], skip_special_tokens=True)

# Streamlit UI
st.title("🌐 AI Translator")
st.write("Translate between English, Tamil, Hindi, and Malayalam")

text = st.text_area("Enter text to translate:")

col1, col2 = st.columns(2)
with col1:
    src_lang = st.selectbox("From", list(language_codes.keys()))
with col2:
    tgt_lang = st.selectbox("To", list(language_codes.keys()))

if st.button("Translate"):
    if src_lang == tgt_lang:
        st.warning("Source and target languages are the same!")
    else:
        src_code = language_codes[src_lang]
        tgt_code = language_codes[tgt_lang]
        try:
            result = translate_text(text, src_code, tgt_code)
            st.success("Translation:")
            st.write(result)
        except Exception as e:
            st.error(f"Translation failed: {e}")
