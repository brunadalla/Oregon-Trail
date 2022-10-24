## Oregon Trail
Projeto realizado no segundo módulo do curso de **Formação em Desenvolvimento Full Stack da Kenzie Academy Brasil**.

Projeto realizado para praticar os fundamento de **POO (Programação Orientada a Objetos)**.

Tarefas realizadas:

- Criação da classe **Traveler (viajante)** com algumas propriedades:

1. **Nome**, o qual é fornecido como parâmetro para o construtor;
2. **Quantidade de comida** com valor inicial 1;
3. Propriedade **isHealthy** (está saudável) que indica se ele está doente ou não com valor inicial true. 

O principal objetivo do Traveler é racionar seus mantimentos através de caçadas e refeições para que ele não fique doente durante sua viagem.
Para racionar seus mantimentos, o Traveler pode:

1. **hunt (Caçar)**: Quando o Traveler sai para caçar, a quantidade de comida aumenta em 2;
2. **eat (Comer)**: Quando o Traveler tenta comer e a quantidade de comida for maior que 0, o Traveler perde 1 comida, mas continua saudável. Caso a quantidade for 0, o Traveler não consegue comer e fica doente.

- Criação da classe **Wagon (carroça)** com algumas propriedades:

1. **capacity (capacidade)**, a qual é fornecida como parâmetro para o construtor e determina a quantidade máxima de passengers que cabe na carroça;
2. **passengers (passageiros)**, a qual é uma lista dos passageiros que inicialmente está vazia.

O pricipal objetivo do Cocheiro (Piloto da carroça) é monitorar os assentos e estado de saúde de todos os viajantes para que ele possa decidir seguir viagem ou manter a quarentena. Para monitorar seus assentos e seus viajantes, o cocheiro pode:

1. **getAvailableSeatCount**: Retorna o número de assentos vazios, determinado pela capacidade que foi estipulada quando a carroça foi criada comparado com o número de passengers a bordo;
2. **join**: Adiciona um viajante à carroça caso tenha espaço;
3. **shouldQuarantine**: Retorna true se houver pelo menos uma pessoa não saudável na carroça e retorna false se não houver;
4. **totalFood**: Retorna o número total de comida de todos os ocupantes da carroça.

- Criação da classe **Hunter (caçador)** estendida da classe Passenger: O Caçador é um Viajante que se dá melhor encontrando comida, mas também precisa de mais comida. Ele começa com 2 comidas em vez de apenas 1. Ele também pode dar comida para outros viajantes. Métodos: 

1. **hunt**: Aumenta a comida do caçador em 5 ao invés de apenas 2 como um passenger convencional;
2. **eat**: Consome 2 unidades da comida. Se um caçador não tiver 2 comidas quando for instruído a comer, ele come o quanto puder (0 ou 1 unidade), mas o caçador não fica mais saudável. (Um viajante normal come apenas 1 unidade de comida.);
3. **giveFood (dar comida)**: transfere certo numero de unidades de comida do caçador para outro viajante. Se o caçador tiver menos comida do que foi instruído a dar, então nenhuma comida é transferida.

- Criação da classe **Doctor (doutor)** estendida da classe Passenger: O médico é um viajante que cura outros viajantes para que eles possam seguir a viagem saudável. Ele possui apenas um método: 

1. **heal (curar)**: Este método cura viajantes doentes fazendo com que eles sigam viagem saudáveis, mudando a propriedade isHealthy do viajante para true.

**https://brunadalla.github.io/Oregon-Trail/**
