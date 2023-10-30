import React from 'react'
import "../css/Home.css"
import Comentarios from "../Components/Comentarios";
import FormComentarios from "../Components/FormComentarios"
import ValidateLogin from "../Components/ValidateLogin"

function Home(props) {
    return (
        <main>

            <section className='Perfil'>
                <img src="/images/CARELYN.png" alt="" />

                <div className="Text">
                    <h1>CARELYN MEJÍAS</h1>
                    <p>Me inquieta la forma en la que surgen las relaciones y los vínculos dentro del espacio doméstico. Así pues, desde lo autobiográfico construyo una obra que evidencie otro tipo de relación familiar menos estereotipada, que abra la pregunta hacia las relaciones de poder dentro del ámbito del hogar; desde lo metafórico, la ironía, el humor y lo poético.  En un inicio mis piezas se componían de la exploración del lenguaje visual de la fotografía, el video y el archivo familiar. Utilizaba la fotografía doméstica para hablar de jerarquías y nuevos modos de armar lazos afectivos en el núcleo familiar.  Con mi migración las preguntas hacia cómo se construyen estos vínculos en el hogar se ampliaron y con ellas los recursos a explorar. Se incorporó a la construcción del lenguaje, la fotografía analógica, el videoperformance, el cuerpo y el recurso del manuscrito.</p>
                </div>

            </section >

            <section className="Video">
                <div>
                    <iframe title='video' src="https://player.vimeo.com/video/730091509?h=b1fec622c4&autoplay=0&color=A31E22&title=0&byline=0&portrait=0" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen></iframe>
                    <section className="Autor">
                        <p>Carelyn Mejías</p>
                        <p>ANOTACIONES</p>
                        <p>Video Performance</p>
                        <p>Buenos Aires</p>
                        <p>2022</p>
                    </section>
                </div>

            </section>

            <h2>Entrevista</h2>
            <section className="Preguntas">
                <div className="Box-Preguntas">
                    <div className="Pregunta">

                        <h3>Tu obra tiene mucho que ver con la memoria, incluida la estética elegida.  Cuéntanos un poco sobre tus influencias y motivaciones...</h3>
                        <p>En mi obra la memoria viene como derivado, no es mi interés principal, se adhiere al trabajo porque voy generando un archivo propio, autobiográfico y con documentos personales que traen consigo un gesto hacia la memoria. Mi interés principal tiene que ver más con las formas en las que puedo lograr archivar (o no) el modo en el que me voy relacionando emotivamente dentro del espacio doméstico con los seres que ahí me acompañan. Al principio como nieta, hija, hermana y sobrina, luego como madre y de un modo mucho más reciente, la forma en la que me relaciono con mi entorno como ama de casa.&nbsp;  Creo que la idea del archivo en mi trabajo, tiene que ver con varias cosas, pero dos de las principales serían: Uno, que este se reconoce en nuestra cultura occidental como una prueba de verdad, así que básicamente juego con esa idea -desde hace unos años para acá- dejando en evidencia las verdades que me interesan, las traduzco y las ficciono en la confección de mis propios documentos emotivos. Dos, que la puerta hacia los afectos familiares y la posibilidad de entender cómo los vínculos emotivos se construyen en el hogar, me la abrió el archivo doméstico. Entonces me quedé con la interrogante de si es posible hablar de afectos con otro tipo de archivo. Por esta razón utilizo la estética del archivo justamente para poner en tensión algo como los amores y el peso de los mismos. Uso mucho la ironía trabajando en mi archivo, utilizando un formato rígido, distante y neutro, para rellenarlo de pura subjetividad y emociones, para decir: “esto también importa”.&nbsp;  En cada recorte que voy mostrando en mis piezas, hay un interés profundo, no sólo por armar una memoria individual que se expanda a una memoria colectiva, sino que las mismas afecten al afuera desde la empatía. Juego a que es posible cambiar el modo en el que se establecen las jerarquías en el afuera y que lo que pasa adentro, por el cuerpo afectuoso, es igual de importante.</p>
                    </div>
                    <div className="Pregunta">
                        <h3>¿Cómo te acercaste a las artes visuales?</h3>
                        <p>Comencé a estudiar artes visuales sin saber nada de ellas. Nunca antes tuve contacto con nadie ni nada relacionado a las artes, no conocía ni siquiera los museos en Caracas, donde nací. Tampoco sabia de artistas. Comencé la licenciatura en artes plásticas por error y me quedé cursando los siguientes seis años por los afectos que se fueron desarrollando en mí.&nbsp;  En mi casa al salir del liceo (secundaria) o te pones a trabajar o estudias en la universidad.  Yo no quería trabajar, para ese momento tendría diecinueve años, así que aplique a la universidad de las artes UNEARTE. Apliqué porque era gratuita, no había que pagar matricula ni semestres. Yo no tenía para pagarme una universidad privada así que básicamente entre para “no quedarme sin hacer nada”.&nbsp;  Luego, elegir la mención fue lo más sencillo, no sabia ni dibujar, ni pintar, ni esculpir. Así que me fui por los nuevos medios: el video y el sonido. El primer tiempo de la universidad para mí era sólo para cumplir asistencias y para que mi familia viera que estaba “estudiando”, así que no desarrollé una pasión inmediata. Para el segundo año comencé a entender que había otros modos de traducir mis sentires-pensares y otras formas de conocer-reconocer el contexto que me rodeaba. Ya para el tercer año, tuve mi primera cámara y empecé a prestar atención a las imágenes y a dejarme tocar y conmover por ellas.&nbsp;</p>

                    </div>
                    <div className="Pregunta">


                        <h3>¿Cuándo llegaste a Argentina y por qué?</h3>
                        <p>Llegué a Buenos Aires en el 2019, desde Perú. Salí a finales de 2017 de Venezuela, luego de terminar mi tesis para la licenciatura en Artes.  La situación social para ese año en el país era bastante complicada, también en mi casa la situación económica era muy compleja y terminar la carrera implicaba comenzar otra etapa en la que sentía que dentro de Venezuela no iba a poder avanzar con mis propósitos personales y con mi quehacer diario artístico.  Así que migré en diciembre de 2017 hacia Perú y luego de pasar un año y algunos meses ahí,&nbsp;</p>


                    </div>
                </div>
                <div className="Box-Preguntas">
                    <div className="Pregunta">
                        <h3>¿Crees que tu trabajo aborda el racismo y la xenofobia? ¿Si es así, de qué manera?</h3>
                        <p>Como mi trabajo esta vinculado directamente a mi autobiografía ha mutado y cambiado con el tiempo.  Al inicio mi trabajo no se relacionaba para nada con estos temas, mi familia es negra y para mí esto no era algo en lo cual indagar, menos de modo consciente, porque además tengo el privilegio de estar entre los tonos más claros de mi núcleo familiar.&nbsp;  Con la migración comencé a notar muchísimas cosas, entre ellas como mi cuerpo es un cuerpo racializado. Así que comencé a reflejar este saber(me) negra en mis trabajos más recientes de una forma, quizás no tan obvia para el afuera, pero bastante clara para mí.&nbsp;  Comencé a trabajar -mis fotografías y videos junto a mi hijo- en blanco y negro y también comencé a vestir de negro junto a él, porque sufro en mi cotidianidad situaciones de racismo. Por ejemplo: se pone en duda el vinculo madre-hijo por nuestro tono de piel, porque mi hijo es un niño blanco. También situaciones donde se afirma, sin duda alguna, que yo soy la nana o comentarios de asombro porque salió “blanquito” e incluso comentarios asegurando que el padre debe ser argentino (cuando es venezolano) porque es muy blanco para venir de mí. Así, todas estas situaciones me llevaron a anular nuestros tonos de piel, disolver un poco esa pigmentocracia desde la estética en las imágenes que produzco, eliminando el color tanto de la ropa como de la obra. Específicamente en esta obra con mi hijo, porque quería que cuando vieran mi trabajo, este trabajo, vieran esta nariz grande, esta boca gruesa, este ser madre y artista, no sólo negra.&nbsp;&nbsp;</p>

                    </div>
                    <div className="Pregunta">
                        <h3>¿Para tí hubo choques culturales entre Argentina y Venezuela?</h3>
                        <p>Si claro, estoy de extremo a extremo en el sur, así que hubo muchos y aún se mantienen varios.&nbsp;  Desde la comida, hasta el clima, la falta de playa, las temperaturas. Aunque se habla español en ambos países, los códigos y el coloquio son diferentes. La forma de expresarme con mi acento aún es muy predominante.&nbsp;  Eso no me ha limitado para nada, es un privilegio poder expresarme en el mismo idioma, pero si marca una pauta en los modos en los que me relaciono. Mi color de piel también influye un montón, porque Buenos Aires tiene un gentilicio (en su mayoría) de mujeres y hombres blancos.&nbsp;  Si bien hay muchísima migración acá, no solo venezolanos, sino también peruanos, bolivianos, paraguayos, colombianos y senegaleses, por decir algunos, el tema del racismo para mí, desde mi experiencia, es un tema de todos los días. No porque en Venezuela no haya racismo, por supuesto que lo hay, pero hay un tema que pasa por la vista, lo que se ve y lo que no.&nbsp;  Para mirar personas afro acá en Buenos Aires tienes que irte a los sectores mas precarios y eso es algo que me asombra mucho aún. Lo que quiero decir con esto es que en lo sectores en los que suelo moverme, incluso en los espacios de arte, conseguir personas con distintos tonos de piel no suele pasar. Creo que para mi eso es mi mayor choque cultural acá.&nbsp;</p>

                    </div>
                    <div className="Pregunta">
                        <h3>¿Cómo te construyes más allá de la maternidad?</h3>
                        <p>Cuando me hice madre todo lo que conocía como mío, se multiplicó porque me tocó partirme en dos y compartirlo todo: tiempo, espacio, mente, amores, cuerpo. De este modo, construirme por fuera de la maternidad ha sido una batalla constante en la que me he aferrado a mis artes justamente para no yacer sólo en el maternar.&nbsp;  Mi obra en sí es un gesto de resistencia propia, me fotografié junto a mi hijo sus primeros tres años de vida (hoy tiene tres años y medio y hace tres meses que ya no lo hacemos más) para poder entender cómo relacionarme con él y vincularnos, pero también para no dejar de ser artista, seguir indagando en mis intereses y poder hacer obra. Cuando acciono frente a la cámara mi maternidad no es la prioridad, en esos pequeños instantes ni si quiera es mi hijo, es poder entender como compartirlo todo, incluso el momento de creación, de un modo que ambos estemos cuidados y que yo pueda desarrollar mis ideas plásticas.&nbsp;  Dejo mi maternidad muy obvia en mis imágenes porque no es lo que me interesa que descubran. De este modo está puesta en las primeras capaz, como quien usa mucho rojo para pintar. Pero no es el color lo que importa, sino las sensaciones que eso genera. Así mismo, mi interés no es que me vean criando a mi hijo. En ese criar frente a la cámara esta toda mi intención de mantenerme creando para no olvidarme que puedo y que tengo conocimiento de ser algo más que madre.&nbsp;</p>

                    </div>
                </div>
            </section>

          
           <section className='Chat'>
          
           <h2>Chat</h2>
           <div>
           <Comentarios />
            <div className="FormComents">
                    <FormComentarios />
                    <ValidateLogin />
            </div>
           </div>
           
           </section>

        </main>
    )
}


export default Home
