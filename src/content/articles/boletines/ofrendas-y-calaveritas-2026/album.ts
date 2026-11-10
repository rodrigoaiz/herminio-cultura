// Álbum de Día de Muertos 2026, del PDF que armó el Comité de Cultura. [...slug].astro lo pinta debajo del artículo.
import type { OfrendaEntry } from '../../../../components/OfrendaAlbum.astro';
import escuela1 from './escuela-1.jpg';
import escuela2 from './escuela-2.jpg';
import escuela3 from './escuela-3.jpg';
import escuela4 from './escuela-4.jpg';
import mural1 from './periodico-mural-1.jpg';
import mural2 from './periodico-mural-2.jpg';
import sandino from './sandino-p.jpg';
import alanna from './alanna-c.jpg';
import braulio from './braulio-h.jpg';
import jade from './jade-m.jpg';
import fernanda from './fernanda-r.jpg';
import dario from './dario-v.jpg';
import mauricio1 from './mauricio-s-1.jpg';
import mauricio2 from './mauricio-s-2.jpg';
import ava from './ava-c.jpg';
import ander from './ander-a.jpg';
import xanat from './xanat-m.jpg';
import lucia from './lucia-r.jpg';
import natalia from './natalia-n.jpg';
import dana from './dana-maria-m.jpg';
import nahui from './nahui-e.jpg';
import rodrigoEmilio from './rodrigo-emilio-v.jpg';
import luisaInes from './luisa-e-ines.jpg';
import ramona from './ramona-m.jpg';
import nancy from './nancy-u.jpg';
import magdalena from './magdalena-m.jpg';
import iktan from './iktan-a.jpg';

// Mosaico de dos columnas: la primera mitad de la lista llena la columna izquierda.
// Cada columna abre con la ofrenda de la escuela; foto con calaverita, sólo foto y sólo calaverita van revueltas.
export const entries: OfrendaEntry[] = [
 { name: 'Ofrenda de la escuela', photo: escuela1, alt: 'Ofrenda de la escuela en penumbra: escalones con veladoras, fotos, flores de cempasúchil y papel picado.' },
 { name: 'Sandino P. 3º', photo: sandino, alt: 'Altar enmarcado por un arco de cempasúchil y terciopelo, con fotos familiares al centro y cuadros en la pared.', note: 'Altar inspirado en San Jacinto Chilateca, Oaxaca, el pueblo de donde es originario el abuelo paterno de Sandino.' },
 {
  name: 'Alanna C. 4º',
  photo: alanna,
  alt: 'Ofrenda de noche con veladoras encendidas, fotos de familiares, flores rojas y de cempasúchil y una cruz de papel picado.',
  title: 'Blue y la Muerte',
  calaverita: 'Estaba mi pez beta\nnadando como atleta,\ncuando llegó una catrina\ncomiendo una mandarina\ny le dijo: «Tú vienes conmigo\ny te vuelves mi amigo».\nBlue trató de ignorar,\npero la catrina se puso a nadar.\nBlue se espantó\ny del susto saltó,\nla catrina le dio un coscorrón\ny se lo llevó al panteón.',
 },
 { name: 'Jade M. 4º', photo: jade, alt: 'Ofrenda llena de papel picado de colores, fotos, flores de cempasúchil, veladoras y calaveritas sobre un mantel morado.' },
 {
  name: 'Marta Elisa R. Jardín 3',
  title: 'Calaverita para los que ya no están con nosotros',
  calaverita: 'La Catrina llegó una noche,\ncon estrellas de algodón,\nbuscando a los que se han ido,\npero viven en el corazón.\n«No estés triste, pequeñita»,\nnos verás en cada flor,\nen las risas, los abrazos\n¡y en los momentos de amor!\nAunque no puedas vernos,\nte cuidamos desde el cielo,\nvivimos en las estrellas,\n¡y en tu corazón!',
 },
 { name: 'Darío V. 2º', photo: dario, alt: 'Ofrenda con mantel blanco, flores de papel naranja, papel picado, fotos antiguas, botellas y un cartel de hongos en la pared.' },
 { name: 'Mtro. Mauricio S.', photo: mauricio1, alt: 'Mesa con manteles de papel picado rosa y morado, pan de muerto, fruta, calaveritas de azúcar y un florero de cempasúchil.', note: 'Dedicada a mi madre.' },
 { name: 'Mtro. Mauricio S.', photo: mauricio2, alt: 'Tres retratos antiguos de una mujer joven sobre papel picado, junto a un collar de perlas largo.' },
 {
  name: 'Rodrigo, César y Tatiana 4º',
  title: 'Beatriz, la cocina y la calaca',
  calaverita: 'Una mañana cocinando mi abuela estaba\nmientras alegre con la calaca cantaba:\n«Llegó el lechero, grita la gente:\n¿a cómo el litro? A uno veinte…».\nEntre ollas y sartenes sonaban los acordes\nasemejando guitarras y acordeones:\n«Ay, qué bonito es este ritmo popular,\nven, morenita, vamos a bailar».\nLa calaca con mi abuela quería festejar,\npero Beatriz sólo quería preparar algún manjar:\npasteles de chocolate, alcachofas a la vinagreta\ny una que otra bebida para curar alguna grieta.\nMientras la flaca le gritaba,\ntrabaje y trabaje, no tenía tiempo de escucharla.\nCon cada pisada mi abuela se alejaba.\nElla, muy ajetreada, subía y bajaba.\nPero paciente la catrina esperaría\nel día en que mi abuela por fin cedería.\nPero los días pasaban y mi abuela seguía cantando:\n«Llegó el lechero, grita la gente:\n¿a cómo el litro? A uno veinte…».\nBeatriz las manos tan dulces y tiernas tenía\nque todo lo que tocaba llenaba de alegría.\nPor eso la catrina quería sentir aquellas manos,\nporque las suyas no eran como las de los humanos.\nLa sangre en mi abuela fluía,\naquella sangre que hoy es la mía,\nesa sangre que bombea con cada latido\ny que teje la historia de nuestro camino.\nBeatriz noventa y cinco velas apagó,\nlas cenizas de cada una la calaca juntó.\nUn amanecer se dio cuenta de que la espera terminaba,\npues en sus brazos Beatriz se recostaba.\nLa calaca cayó rendida por aquellas manos tibias\ny por aquel pequeño y frágil cuerpo\ncon los ojos más profundos que el firmamento,\ny se fueron juntas, abrazadas, entre rosas y lilas.\nYa sólo se escuchó a lo lejos\naquella canción llena de alegría:\n«Llegó el lechero… llegó cantando».\nY así se fueron las dos, casi flotando.',
 },
 { name: 'Xanat M. 5º', photo: xanat, alt: 'Ofrenda frente a un ventanal con papel picado azul y rosa, guirnalda de flores de papel, cempasúchil, una catrina, calaveritas y una tira de calaveras de fieltro sobre el mantel.' },
 { name: 'Lucía R. 4º', photo: lucia, alt: 'Ofrenda con papel picado azul, amarillo y morado, cempasúchil, guirnalda de luces y una mesa llena de platillos y fotos.' },
 { name: 'Ofrenda de la escuela', photo: escuela3, alt: 'Camino de pétalos de cempasúchil sobre el piso azul del patio, con una catrina, veladoras y pequeñas ofrendas.' },
 { name: 'Periódico mural', photo: mural1, alt: 'Periódico mural de Día de Muertos con marco azul, textos e imágenes de catrinas, cempasúchil y papel picado.' },
 { name: 'Natalia N. 4º', photo: natalia, alt: 'Ofrenda en una mesita con mantel de colores, pan de muerto, fotos, papel picado azul y una guirnalda de cempasúchil.' },
 { name: 'Luisa 1º e Inés 5º', photo: luisaInes, alt: 'Ofrenda con mantel rosa, un esqueleto rojo en una silla, fotos familiares, fruta, veladoras y macetas de cempasúchil.' },

 { name: 'Ofrenda de la escuela', photo: escuela2, alt: 'Pequeña ofrenda sobre una base de papel picado con una calavera, pan, flores rojas y un tapete de aserrín.' },
 {
  name: 'Braulio H. 5º',
  photo: braulio,
  alt: 'Ofrenda en una mesa con mantel verde de papel picado, fotos, pan de muerto, fruta, cempasúchil y papel picado morado y azul en la pared.',
  title: 'A mi gata Luna',
  calaverita: 'Andaba muy sola jugando,\nhambrienta y maullando,\na su jaula llegué anunciando:\n«¡Te llevaré a mi casa!», y me fui muy feliz silbando.\nEs una gata negra como la noche,\nde ojos amarillos, hermosa sin reproche,\nrápido la subimos a nuestro coche\ny celebramos con un ponche.\nLuna se llama mi gatita,\nes suave y muy calientita,\nduerme muy feliz en su cobijita\ny a veces se pasa de tragoncita.\nLa muerte dijo muy decidida:\n«¡A esta gata me la llevaré enseguida!\n¡No llegarás a la séptima vida!».\nY la calaca se fue a su guarida.\nLuna siempre jugaba\ncon peluches, pelotas, nunca se calmaba,\na la calaca siempre la hartaba,\ny el Mictlán no sería su última morada.',
 },
 { name: 'Ava Kaori C. 4º', photo: ava, alt: 'Ofrenda frente a un ventanal con papel picado amarillo y morado, mantel de colores y un perro negro sentado al frente.', note: 'Este año nos despedimos de su tío abuelo Anatolio, un hombre de voz fuerte, alma noble y amante de los dóberman, así que creemos que pasó al otro lado bien acompañado.' },
 {
  name: 'Fernanda R. 3º',
  photo: fernanda,
  alt: 'Ofrenda con papel picado morado, cempasúchil, fotos de familiares y de una perrita, veladoras y calaveritas de azúcar.',
  title: 'Mi calaverita a Mina',
  calaverita: 'Era Mina una perrita,\nmuy chiquita y bonita,\nmuy tierna era\ny una gran compañera.\nLe dio diabetes y se enfermó del bazo,\nasí que la muerte se la llevó por si acaso,\nla enfermedad avanzaba\ny ya casi no jugaba.\nMuy tristes nos quedamos,\npero aun así la recordamos,\na Mina extrañamos\ny el dos de noviembre la esperamos.',
 },
 { name: 'Ander A. 3º', photo: ander, alt: 'Ofrenda con papel picado de colores en la pared, fotos, veladoras, una calavera, fruta y flores.' },
 {
  name: 'Alanna C. 4º',
  title: 'La Muerte vino por la familia',
  calaverita: 'La Catrina muy coqueta\na mi familia visitó,\ncon su vestido de fiesta\ny una lista que sacó.\n«Vengo por los abuelitos,\npor los tíos y las tías,\nque se preparen toditos,\n¡nos vamos de romería!».\nLos abuelos, muy sonrientes,\nla invitaron a pasar:\n«Si has venido por nosotros,\n¡primero vamos a cenar!».\nLas tías sacaron el mole,\nlos tíos, el mezcal,\ny la Flaca, entusiasmada,\n¡se olvidó de su plan mortal!\nLos abuelos recordaron\nsus historias de antaño,\ny entre risas y recuerdos\nse les fue pasando el año.\nLos tíos contaron chistes,\nlas tías se echaron a cantar,\ny la Muerte, tan contenta,\n¡se puso también a bailar!\n«¡Qué familia tan hermosa!»,\nla Calaca suspiró,\n«con tanto amor y tanta historia,\n¡hasta mi alma se alegró!».\nY aunque el tiempo siga andando\ny la vida tenga un final,\nquienes dejan amor sembrado\nnunca se van del todo, jamás.\nPor eso en cada noviembre,\ncon flores, velas y amor,\nabrazamos su recuerdo\ny les damos un lugar en el corazón.',
 },
 { name: 'Dana María M. 2º', photo: dana, alt: 'Ofrenda con alebrijes y calaveras de papel, cempasúchil, veladoras, pan y una fila de perritos de juguete arriba.' },
 {
  name: 'Iktan A. 2º',
  photo: iktan,
  alt: 'Ofrenda en el piso con tapete de aserrín morado y dos calaveras de cempasúchil, macetas de flores, calaveritas de azúcar, un esqueleto, veladoras y papel picado.',
  calaverita: 'Estaba la calavera\nmuy contenta en el patio grande,\njugando con los niños\nde la Escuela Herminio Almendros\ndulces, risas y sustillos\npara que nadie se espante.\nY al sonar de la campana,\nse fue bailando hasta la tarde.',
 },
 { name: 'Nahui Mixtli E. 2º', photo: nahui, alt: 'Ofrenda en una mesa de madera con fotos, ollas de barro, cempasúchil y una guirnalda de papel picado al frente.' },
 { name: 'Rodrigo Emilio V. 4º', photo: rodrigoEmilio, alt: 'Ofrenda de noche con veladoras, fotos, un esqueleto, flores de cempasúchil y un mantel blanco con papel picado.' },
 { name: 'Ofrenda de la escuela', photo: escuela4, alt: 'Pequeña ofrenda iluminada con una veladora sobre el camino de cempasúchil del patio.' },
 { name: 'Ramona Victoria M.', photo: ramona, alt: 'Ofrenda rodeada de una espiral de cempasúchil y veladoras en el piso, con papel picado y flores colgando.' },
 { name: 'Profa. Nancy U.', photo: nancy, alt: 'Ofrenda en una esquina con mesa redonda, pan de muerto, tazas, calabazas, papel picado morado y fotos en la pared.' },
 { name: 'Profa. Magdalena M.', photo: magdalena, alt: 'Ofrenda grande en un salón con manteles de colores, fruta, pan, flores de cempasúchil y papel picado.' },
 { name: 'Periódico mural', photo: mural2, alt: 'Periódico mural de Día de Muertos con marco naranja, textos e imágenes de calaveras, pan de muerto y catrinas.' },
];
