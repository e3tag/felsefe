const quotes = [
    { text: "Sorgulanmamış bir hayat yaşanmaya değmez.", author: "Sokrates" },
    { text: "Bildiğim tek şey, hiçbir şey bilmediğimdir.", author: "Sokrates" },
    { text: "Karanlıktan korkan bir çocuğu kolayca affedebiliriz; hayattaki gerçek trajedi yetişkinlerin ışıktan korkmasıdır.", author: "Platon" },
    { text: "Düşünmek, ruhun kendi kendine konuşmasıdır.", author: "Platon" },
    { text: "Mükemmellik bir eylem değil, bir alışkanlıktır.", author: "Aristoteles" },
    { text: "Kendini bilmek, tüm bilgeliğin başlangıcıdır.", author: "Aristoteles" },
    { text: "Mutluluk kendine yetenlerindir.", author: "Aristoteles" },
    { text: "Düşünüyorum, öyleyse varım.", author: "Descartes" },
    { text: "Kesin olan bir şey varsa, o da hiçbir şeyin kesin olmadığıdır.", author: "Descartes" },
    { text: "Beni öldürmeyen şey beni güçlendirir.", author: "Nietzsche" },
    { text: "Üstinsan, insanın aşılması gereken bir şeydir.", author: "Nietzsche" },
    { text: "Müziğin sesini duymayanlar, dans edenleri deli sanırlar.", author: "Nietzsche" },
    { text: "Hayat, çözülmesi gereken bir sorun değil, deneyimlenmesi gereken bir gerçekliktir.", author: "Søren Kierkegaard" },
    { text: "İnsan özgürlüğe mahkumdur.", author: "Jean-Paul Sartre" },
    { text: "Cehennem diğer insanlardır.", author: "Jean-Paul Sartre" },
    { text: "Varoluş özden önce gelir.", author: "Jean-Paul Sartre" },
    { text: "Başkalarının hatalarından ders alın. İnsan hepsini kendi yapacak kadar uzun yaşamıyor.", author: "Eleanor Roosevelt" },
    { text: "Gerçek bilgi, insanın cehaletinin derecesini bilmesidir.", author: "Konfüçyüs" },
    { text: "Alkışlanacak bir şey yapmak istiyorsan, önce kendinden başla.", author: "Konfüçyüs" },
    { text: "Sadelik en yüksek gelişmişlik düzeyidir.", author: "Leonardo da Vinci" },
    { text: "Hiçbir şey keşfedilmeden önce inanılmaz değildir.", author: "Francis Bacon" },
    { text: "Bilgi güçtür.", author: "Francis Bacon" },
    { text: "İnsan insanın kurdudur.", author: "Thomas Hobbes" },
    { text: "Doğa asla aldatmaz; bizi aldatan daima kendimiziz.", author: "Jean-Jacques Rousseau" },
    { text: "İnsan özgür doğar ama her yerde zincire vurulmuştur.", author: "Jean-Jacques Rousseau" },
    { text: "Aydınlanma, insanın kendi suçu ile düşmüş olduğu bir ergin olmama durumundan kurtulmasıdır.", author: "Immanuel Kant" },
    { text: "Öyle hareket et ki, senin hareketlerin genel bir yasa olsun.", author: "Immanuel Kant" },
    { text: "Dünya, onu gözlemleyen özne olmasaydı var olmazdı.", author: "Arthur Schopenhauer" },
    { text: "Her sınırlama mutluluk verir.", author: "Arthur Schopenhauer" },
    { text: "Yaşamın amacı, acıyı azaltmaktır.", author: "Arthur Schopenhauer" },
    { text: "Mantıklı olan her şey gerçektir, gerçek olan her şey mantıklıdır.", author: "Hegel" },
    { text: "Zaman, ruhun hareketidir.", author: "Hegel" },
    { text: "Filozoflar dünyayı yalnızca yorumladılar; oysa sorun onu değiştirmektir.", author: "Karl Marx" },
    { text: "Dinin eleştirisi, tüm eleştirilerin başlangıcıdır.", author: "Karl Marx" },
    { text: "Daha önce denenmiş olanı tekrar denemekten korkmayın.", author: "Marcus Aurelius" },
    { text: "Hayatımız, düşüncelerimizin eseridir.", author: "Marcus Aurelius" },
    { text: "En iyi intikam, düşmanın gibi olmamaktır.", author: "Marcus Aurelius" },
    { text: "İnsanı rahatsız eden olaylar değil, o olaylar hakkındaki görüşleridir.", author: "Epiktetos" },
    { text: "Sadece eğitimli olanlar özgürdür.", author: "Epiktetos" },
    { text: "Mutluluğa giden tek bir yol vardır: Kontrol edemeyeceğimiz şeyler hakkında endişelenmeyi bırakmak.", author: "Epiktetos" },
    { text: "Felsefe, nerede olduğumuzu ve nereye gittiğimizi bilmektir.", author: "Seneca" },
    { text: "Yaşamak için bir 'neden'i olan her türlü 'nasıl'a katlanabilir.", author: "Viktor Frankl" },
    { text: "İnsan, ne ise o olmayı reddeden tek yaratıktır.", author: "Albert Camus" },
    { text: "Dünyanın saçmalığına karşı tek cevap başkaldırıdır.", author: "Albert Camus" },
    { text: "Sonbahar, her yaprağın çiçek olduğu ikinci bir bahardır.", author: "Albert Camus" },
    { text: "Dilimin sınırları, dünyamın sınırlarıdır.", author: "Ludwig Wittgenstein" },
    { text: "Hakkında konuşulamayan şey konusunda susmalı.", author: "Ludwig Wittgenstein" },
    { text: "Adalet, güçsüzlerin gücüdür.", author: "Baruch Spinoza" },
    { text: "Anlamaya çalışmak, boyun eğmenin ilk adımıdır.", author: "Baruch Spinoza" },
    { text: "Bin millik bir yolculuk tek bir adımla başlar.", author: "Lao Tzu" },
    { text: "Kendine hakim olan dünyayı fetheder.", author: "Lao Tzu" },
    { text: "Doğa acele etmez, yine de her şey başarılır.", author: "Lao Tzu" },
    { text: "Barış, kalpten gelir. Dışarıda aramayın.", author: "Buddha" },
    { text: "Zihin her şeydir. Ne düşünürsen o olursun.", author: "Buddha" },
    { text: "Öfkenizden dolayı cezalandırılmayacaksınız, öfkeniz tarafından cezalandırılacaksınız.", author: "Buddha" },
    { text: "Her şey akar, hiçbir şey kalıcı değildir.", author: "Herakleitos" }
];

const quoteText = document.getElementById('quote-text');
const quoteAuthor = document.getElementById('quote-author');
const quoteBtn = document.getElementById('new-quote-btn');

function getNewQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const selectedQuote = quotes[randomIndex];

    // Animasyon: Önce kararır ve hafif yukarı kayar
    quoteText.style.opacity = 0;
    quoteText.style.transform = "translateY(-10px)";
    if(quoteAuthor) quoteAuthor.style.opacity = 0;

    setTimeout(() => {
        // İçeriği güncelle
        quoteText.innerText = `"${selectedQuote.text}"`;
        if(quoteAuthor) quoteAuthor.innerText = `- ${selectedQuote.author}`;
        
        // Animasyon: Geri gelir ve aydınlanır
        quoteText.style.opacity = 1;
        quoteText.style.transform = "translateY(0)";
        if(quoteAuthor) quoteAuthor.style.opacity = 1;
    }, 400);
}

// Buton Tıklama
if (quoteBtn) {
    quoteBtn.addEventListener('click', getNewQuote);
}

// Scroll Progress Bar Mantığı
window.addEventListener("scroll", () => {
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const progress = (scrollTop / scrollHeight) * 100;
    const bar = document.getElementById("scrollProgress");
    if (bar) bar.style.width = progress + "%";
});

// Sayfa ilk yüklendiğinde bir söz gelsin
window.onload = getNewQuote;





const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;

// Kullanıcının önceki tercihini kontrol et
if (localStorage.getItem('dark-mode') === 'enabled') {
    body.classList.add('dark-mode');
    darkModeToggle.innerText = '☀️'; // Güneş ikonu yap
}

darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('dark-mode', 'enabled');
        darkModeToggle.innerText = '☀️';
    } else {
        localStorage.setItem('dark-mode', 'disabled');
        darkModeToggle.innerText = '🌙';
    }
});