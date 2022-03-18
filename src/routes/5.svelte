<script>
	import Transition from './../components/transition.svelte';
	import BioCard from './../components/bio-card.svelte';
	import ChapterButton from './../components/chapter-button.svelte';
	import Background from './../components/background.svelte';
	import Card from './../components/card.svelte';
	import SectionHero from './../components/section-hero.svelte';

</script>
<Transition>
    
    <SectionHero title="A Focus on Music" bg="../../static/backgrounds/afocusonmusic.jpg" opacity="7"/>
<Background parallax src="../../static/backgrounds/Elderly_Karl_V.jpg" scrim="none" classes="flex flex-col items-end p-4 md:p-16 2xl:p-32 2xl:px-64">
    <Card classes="w-full md:w-1/2 mb-4 md:mb-24">
        <div class="first-letter:text-[300%] w-full">
            Charles and Clement could also control aspects of the prescribed liturgy and the music of the Mass. It is clear from what we know of Charles’s personality that the ceremony–and not least its music–was important to him. An oft-cited passage from Prudencio de Sandoval’s biography of Charles V underscores the ruler’s interest in music:
        </div>
    </Card>
    <Card classes="mb-4 md:mb-24 text-4xl text-gold-400">
        “And he knew music, and felt it and liked it, for many times the friars, behind the door, heard him leave his cell and go to the main altar, and they saw him beating time and singing in harmony with those who sang in the choir....”
    </Card>
    <Card classes="md:w-1/2 mb-4 md:mb-24">
        Music was extremely important to the ceremony and to the culture and politics of the Renaissance. *THERE WILL BE A LITTLE WRITEUP ABOUT MUSIC IN THE RENAISSANCE HERE* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id ligula pretium, placerat nisl sed, posuere nisi. Integer scelerisque eleifend ultrices. Pellentesque elementum imperdiet sapien quis volutpat. Mauris arcu metus, pretium eget est non, interdum mattis ante. Praesent imperdiet fringilla lorem ut elementum. Fusce ultrices condimentum neque vel fringilla.
    </Card>
</Background>
<Background src="../../static/backgrounds/laudes.jpg" parallax classes="flex flex-col items-end p-4 md:p-16 2xl:p-32 2xl:px-64">
    <Card classes="mb-4 md:mb-24" >
        The symbolic importance of music for these Renaissance audiences is apparent in the differences that existed between the royal coronation in Aachen and the imperial coronation in Rome, or in Charles’s case, Bologna. Manuscripts that document the royal and imperial coronation ceremonies reveal broad similarities between the two (anointing with oil and bestowing of weapons and insignia, for example), but important details pertaining to music distinguish the ceremonies. For the royal coronation in Aachen, the chants and prayers known collectively as the proper were to be those for January 6, or the feast of Epiphany, the day Christ’s divinity was revealed to the Magi.
    </Card> 
    <Card classes="mb-4 md:mb-24" >
        The allegorical significance of the texts of these chants in this context would not have gone unnoticed, for they refer repeatedly to Christ as a new king. The newly crowned king was to rule on Christ’s behalf, and his authority was revealed to the faithful in the course of the coronation ceremony, just as Christ was revealed to the Magi. As the Magi recognized the authority of the infant Christ, kneeling down and paying him homage, so the secular rulers of the Empire were to pay homage to the newly crowned king. In contrast to the proper chants of Aachen’s royal coronation ceremonies, Rome’s imperial ceremonies required only that the correct proper of the day be sung.
    </Card> 
</Background>
<Background src="../../static/backgrounds/laudeswords.png" scrim="light" opacity="90" classes="flex flex-col md:gap-24 auto-rows-max p-4 md:p-16 2xl:p-32 2xl:px-64">
    <Card classes="md:w-1/2 mb-4 md:mb-24 " light >
        The symbolic importance of music for these Renaissance audiences is apparent in the differences that existed between the royal coronation in Aachen and the imperial coronation in Rome, or in Charles’s case, Bologna. Manuscripts that document the royal and imperial coronation ceremonies reveal broad similarities between the two (anointing with oil and bestowing of weapons and insignia, for example), but important details pertaining to music distinguish the ceremonies. For the royal coronation in Aachen, the chants and prayers known collectively as the proper were to be those for January 6, or the feast of Epiphany, the day Christ’s divinity was revealed to the Magi.
    </Card> 
    <Card classes="md:w-1/2 mb-4 md:mb-24 self-end" light >
        The allegorical significance of the texts of these chants in this context would not have gone unnoticed, for they refer repeatedly to Christ as a new king. The newly crowned king was to rule on Christ’s behalf, and his authority was revealed to the faithful in the course of the coronation ceremony, just as Christ was revealed to the Magi. As the Magi recognized the authority of the infant Christ, kneeling down and paying him homage, so the secular rulers of the Empire were to pay homage to the newly crowned king. In contrast to the proper chants of Aachen’s royal coronation ceremonies, Rome’s imperial ceremonies required only that the correct proper of the day be sung.
    </Card> 
</Background>
<SectionHero title="Dual Motets" bg="../../static/backgrounds/singing.jpg" opacity="7"/>
<video class="w-screen h-screen -z-50 fixed inset-0 aspect-auto object-cover" loop={true} muted={true} autoplay={true}>
    <source src="../../static/backgrounds/choirman2.mp4" type="video/mp4">
</video>
<Background  src="" classes="flex flex-col items-center p-4 md:p-16 2xl:p-32 2xl:px-64">
    <Card classes="my-24 md:my-48">
        Other aspects of the event demonstrate the ways in which music was put to political purposes in the coronation. Because the retinues of both the pope and the emperor were in attendance at the coronation, the choirs of both men were present. The papal choir included the celebrated Italian composer Costanzo Festa, and the imperial choir was directed by Adrien Thiebault, a relatively unknown composer today. The imperial choir’s most illustrious member was the South Netherlandish composer Nicolas Gombert, who served as master of the emperor’s choirboys. A witness to the coronation mentioned that the Credo was sung in canto figurato, a euphemism for polyphony at the time. It seems unlikely that the Credo would have been the only work of polyphony at the event. It is likely that polyphonic works by all three composers were heard at Charles’s coronation.
    </Card>
</Background>
<Background  src="../../static/backgrounds/wideview.jpg" classes="flex flex-col items-center p-4 md:p-16 2xl:p-32 2xl:px-64">
    <Card classes="my-24 md:my-48">
        Festa’s contribution was the six-voice motet, Ecce advenit dominator. It is preserved in a Sistine Chapel manuscript that contains no attributions, but seems to be dedicated exclusively to Festa’s works. The work’s most immediately striking feature is a cantus firmus clearly based upon the ancient opening acclamation of the Laudes Regiæ: “Christus vincit, christus regnat, christus imperat.” For a time, this motet was identified with the coronation of Clement rather than Charles, but Pietschmann is able to cite an obscure Spanish manuscript that also preserves the work. In this version, the word “Christus” in the cantus firmus has been replaced with “Carolus,” removing any doubt about the work’s association with Charles V.
    </Card>
</Background>
<Background  src="../../static/backgrounds/detail.jpg" classes="flex flex-col items-center p-4 md:p-16 2xl:p-32 2xl:px-64">
    <Card classes="my-24 md:my-48">
        The opening of Festa’s motet is derived from the introit for Epiphany, referencing the royal coronation ceremony in Aachen. The next portion of the text is from the introit for the third mass on Christmas Day, Puer natus est, and may have had the effect of calling Charlemagne’s imperial coronation on Christmas in the year 800 to mind. The rest of the text is derived from various psalms.
    </Card>
    <Card classes="mb-24">
        The final word of the motet, “fiat,” is relatively unusual in the liturgy and is almost unheard of as the final word of liturgical text. Its meaning, “may it be done,” is roughly equivalent to the Semitic “amen” used throughout the liturgy. The word was prescribed in Aachen’s coronation ritual and was associated with the “Caesar-hails” of the Roman Empire. Thus the texts at both the beginning and the end of the motet refer to Aachen’s royal coronation rite, a service in which the pope was never involved.
    </Card>
    <Card classes="mb-24 md:my-48">
        Given Festa’s allegiance to Clement, the composer must have set these texts—and indeed the very imperial “Christus vincit” cantus firmus—at Clement’s direction. Festa’s motet can therefore be understood as a considerable homage to Charles on the part of Clement.
    </Card>
</Background>
<Background  src="../../static/backgrounds/pope.jpg" classes="flex flex-col items-center p-4 pb-16 md:p-16 2xl:p-32 2xl:px-64">
    <Card classes="my-24 md:my-48">
        There was a kind of parity between the choirs of Clement and Charles, since a composer from each ensemble contributed a motet for the event. Adrien Thiebeault’s contribution to the coronation’s music is the motet Coronat pontifex, which mentions Clement by name as a crowning pope. The motet compliments Clement, but it does so by distinguishing him from other popes who did not have the opportunity to crown a ruler as powerful as Charles. Unfortunately, only two voices of this five- or six-voice work have survived.
    </Card>
    <Card classes="mb-24">
        The result of the two motets—if they were heard in a sort of dialogue—is that Clement is rendered subservient to Charles. This conclusion seems to also be borne out by some of Clement’s behavior. There are two moments in the ceremony in which the emperor was to kiss the pope’s feet. Clement was heard apologizing to the emperor in the first instance, and embracing him to prevent the second from taking place.
    </Card>
    <ChapterButton numeral="VI" chapter="A Coronation Mass" path="6" />
</Background>
</Transition>

<style>

</style>