# Sistema responsivo de imagens

Toda imagem editorial deve usar `ResponsiveImage`, em `app/components/responsive-image.tsx`. O componente recebe um `preset` de contexto (`hero`, `editorial`, `process`, `portrait`, `gallery`, `wide` ou `brand`) e aplica `object-fit` e pontos focais próprios para desktop, tablet e mobile. Os padrões ficam centralizados em `app/image-presets.ts`.

A seleção da Home fica centralizada em `app/site-images.ts`. Evite reutilizar a mesma fotografia em seções diferentes. Quando uma repetição tiver uma justificativa editorial, limite-a a dois contextos e mantenha Hero e Fundadora exclusivos.

O elemento pai define a moldura: posição, overflow e proporção. Use as proporções editoriais de `globals.css`: hero e faixas amplas ocupam toda a seção; cards de experiências variam entre paisagem e retrato no desktop e usam 4:5 no mobile; retratos de público usam 4:5 no desktop e 5:4 no mobile; a galeria mantém seu mosaico; Instagram usa 4:5 e 4:3.

Para adicionar uma foto:

1. Salve o arquivo otimizado em `public/images` e escreva um `alt` objetivo.
2. Escolha o preset pela função da imagem.
3. Confira o assunto principal em 1440, 1024, 768, 430 e 390 px.
4. Se necessário, passe `focus={{ desktop: '50% 35%', tablet: '55% 35%', mobile: '70% 30%' }}` no uso específico.
5. Use `contain` somente para logos, ilustrações ou obras que não podem ser cortadas.

O ponto focal pertence à própria colocação da imagem. Evite posicionamentos por seletores como `nth-child`.
