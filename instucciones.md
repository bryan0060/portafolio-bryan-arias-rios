# 📝 Instrucciones de Configuración

## Pasos Obligatorios Antes de Desplegar

### 1. Agrega tu Foto de Perfil
- Coloca una foto profesional en: `src/assets/images/profile.jpg`
- Formato recomendado: JPG o PNG
- Dimensiones recomendadas: 400x400px o superior (cuadrada)

### 2. Agrega tu CV
- Coloca tu CV en formato PDF en: `public/cv-bryan-arias.pdf`
- Asegúrate de que el nombre del archivo sea exactamente ese

### 3. Actualiza tu Información Personal
Edita el archivo `src/data/constants.js` y actualiza:
```javascript
export const PERSONAL_INFO = {
  // ...
  email: "TU_EMAIL_REAL@example.com", // ⚠️ ACTUALIZAR
  phone: "+57 300 000 0000", // ⚠️ ACTUALIZAR
  // ...
};
```

### 4. Instala las Dependencias
```bash
npm install
```

### 5. Prueba Localmente
```bash
npm run dev
```

Abre `http://localhost:5173` y verifica que todo se vea correctamente.

### 6. Construye para Producción
```bash
npm run build
```

### 7. Despliega

#### Opción A: Vercel
```bash
npm install -g vercel
vercel
```

#### Opción B: Netlify
1. `npm run build`
2. Arrastra la carpeta `dist/` a Netlify Drop

## ✅ Checklist Final

- [ ] Foto de perfil agregada
- [ ] CV agregado
- [ ] Email actualizado
- [ ] Teléfono actualizado
- [ ] Probado localmente
- [ ] Build exitoso
- [ ] Desplegado en producción

## 🎯 URLs de Referencia

- Vercel: https://vercel.com
- Netlify: https://netlify.com
- GitHub: https://github.com

---

¡Listo! Tu portafolio está completo y profesional. 🚀