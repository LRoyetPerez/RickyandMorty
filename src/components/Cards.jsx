import Card from './Card';

export default function Cards(props) {
   const { characters } = props;
   return <div>
      {
      characters.map(char => (
         <Card
            key={char.id}
            name={char.name}
            status={char.status}
            gender={char.gender}
            origin={char.origin.name}
            species={char.species}
            image={char.image}
            onClose={() => window.alert('Emulamos que se cierra la cards')}
         />
      ))
   }
   </div>;
}
