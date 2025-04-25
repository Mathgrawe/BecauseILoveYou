<template>
    <div
      class="bg-[url('@/assets/images/bg1.jpg')] bg-repeat bg-cover min-h-screen overflow-auto py-8 px-4"
    >
      <h1   
        style="font-family: 'Dancing Script', cursive;;" 
        class="text-white text-center font-cursive text-4xl mb-8">Eu amo você
      </h1>

      <card class="mb-8" />

      <div class="max-w-xl mx-auto mt-10 ">
        <div class="bg-white/80 rounded-xl p-6 mb-6">
        <h2 class="text-3xl sm:text-4xl text-pink-600 font-bold font-cursive text-center mb-4">
            Oi, meu amor 💌
        </h2>
        <p class="text-gray-700 text-lg leading-relaxed text-center">
            Hoje, com um tempinho livre, senti vontade de expressar o quanto você é especial para mim.
            Preparei uma lista repleta de coisas que amo em você e momentos que me fazem sentir bem ao seu lado.
            Espero que cada palavra toque seu coração e te faça sorrir.
        </p>
        <p class="text-pink-500 text-xl font-semibold text-center mt-6">Te amo! 💖</p>
        </div>
    </div>
        <div
        v-for="(reason, idx) in reasons"
        :key="idx"
        class="bg-white/80 rounded-xl p-6 mb-6 flex items-start"
        >
        <div class="flex-1">
            <h2 style="font-family: 'Dancing Script', cursive;" class="text-3xl font-bold text-pink-600 flex items-center justify-between">
            <span>{{ idx + 1 }}. {{ reason.title }}</span>
            <img
            src="@/assets/images/kitty.png"
            alt="Kitty"
            class="w-8 h-8 ml-4"
            />
            </h2>
            <h3 style="font-family: 'Dancing Script', cursive;" class="text-2xl font-semibold text-pink-500 mt-2">POR QUE?</h3>
            <p style="font-family: 'Dancing Script', cursive;" class="text-xl mt-2 text-gray-800">{{ reason.answer }}</p>
        </div>
        </div>
    </div>
  </template>
  
<script setup>
import card from '@/components/card.vue'

  const reasons = [
    { title: 'Seu sorriso', answer: 'Quando você sorri, meu mundo se ilumina como um dia de sol perfeito.' },
    { title: 'Seu beijo', answer: 'Cada beijo seu é um instante de pura magia que meu coração nunca esquece.' },
    { title: 'Seu abraço', answer: 'No seu abraço encontro o calor e a segurança de estar finalmente em casa.' },
    { title: 'Sua risada', answer: 'O som da sua risada é a trilha sonora mais doce para os meus melhores momentos.' },
    { title: 'Sua atenção', answer: 'Quando você me escuta, sinto que meu coração fala e você sempre entende.' },
    { title: 'Sua companhia', answer: 'Estar ao seu lado transforma qualquer lugar no meu lugar favorito.' },
    { title: 'Seu cheiro', answer: 'Seu perfume é aquela lembrança gostosa que eu levo comigo o dia todo.' },
    { title: 'Seu jeito de ver o mundo', answer: 'Ver o mundo pelos seus olhos me faz descobrir beleza até nas pequenas coisas.' },
    { title: 'Seus olhos', answer: 'Nos seus olhos encontro a profundidade de um oceano e a calma de um céu estrelado.' },
    { title: 'Seu cabelo', answer: 'Passar os dedos no seu cabelo é como tocar nuvens suaves de puro carinho.' },
    { title: 'Seu toque', answer: 'Um toque seu é o ponteiro que faz meu coração bater na frequência do amor.' },
    { title: 'A maneira como você me trata', answer: 'Seu cuidado transforma meus dias difíceis em histórias de superação e amor.' },
    { title: 'Tudooo', answer: 'Eu amo cada detalhe seu, desde o jeito de andar até o brilho dos seus sonhos.' },
    { title: 'Seu coração', answer: 'Seu coração generoso é o tesouro mais valioso que eu já tive a sorte de encontrar.' },
    { title: 'Seu olhar', answer: 'Seu olhar carinhoso fala mais do que mil palavras de amor.' },
    { title: 'Sua voz', answer: 'O som da sua voz é a melodia que acalma minha alma.' },
    { title: 'Sua paciência', answer: 'Sua paciência me ensina que todo desafio vale a pena quando estamos juntos.' },
    { title: 'Seus sonhos', answer: 'Adoro como seus sonhos me inspiram a voar mais alto ao seu lado.' },
    { title: 'Sua autenticidade', answer: 'Ser você mesma é o presente mais lindo que você me dá todos os dias.' },
    { title: 'Sua generosidade', answer: 'Sua generosidade aquece meu coração e faz o mundo ao redor brilhar.' },
    { title: 'Seu jeito de amar', answer: 'Seu jeito de amar é a poesia que eu sempre quis ler.' },
    { title: 'Seu carinho', answer: 'Seu carinho é o remédio que cura todas as minhas feridas.' },
    { title: 'Seu apoio', answer: 'Seu apoio me faz acreditar que posso conquistar o mundo, desde que esteja ao seu lado.' },
    { title: 'Seu jeito de dançar', answer: 'Dançar com você é como flutuar em um sonho encantado.' },
    { title: 'Seu jeito de viver', answer: 'A forma como você vive a vida me inspira a ser uma pessoa melhor todos os dias.' },
    { title: 'Seu jeito de ser', answer: 'Seu jeito de ser é a razão pela qual eu me apaixono todos os dias.' },
    { title: 'Seu amor', answer: 'Seu amor é o sol que ilumina meu caminho e me faz acreditar em finais felizes.' },
    { title: 'Seu jeito de cuidar de mim', answer: 'Seu jeito de cuidar de mim é o abraço que meu coração sempre sonhou.' },
    { title: 'Seu jeito de fazer tudo parecer fácil', answer: 'Você tem o dom de transformar desafios em aventuras incríveis.' },
    { title: 'Seu jeito de me fazer rir', answer: 'Você tem o poder mágico de fazer meu coração sorrir mesmo nos dias mais nublados.' },
    { title: 'Seu jeito de me fazer sentir especial', answer: 'Você tem o talento de fazer cada dia parecer uma celebração do nosso amor.' },
    { title: 'Seu jeito de me surpreender', answer: 'Você sempre encontra maneiras de me surpreender e me fazer sentir amado.' },
    { title: 'Seu jeito de ser minha melhor amiga', answer: 'Você é minha melhor amiga e meu amor, tudo em um só lugar.' },
    { title: 'Seu jeito de ser você mesma', answer: 'Amo como você é autêntica e verdadeira, sem medo de ser quem realmente é.' },
    { title: 'Seu jeito de iluminar meu dia', answer: 'Sua presença ilumina até os dias mais sombrios e tristes.' },
    { title: 'Seu jeito de sonhar junto comigo', answer: 'Sonhar ao seu lado é a maior aventura que eu poderia imaginar.' },
  ]
</script>
  