# graphql-dynamic com ADONIS JS
Após alguns estudos com graphql eu notei que para os desenvolvedores de backend pode ser um pouco mais trabalhoso ter que escrever todos os schemas e resolvers, em caso principalmente de sistemas muito grandes. 

Para isso eu tentei desenhar uma solução inicial que com o tempo vou aprimorar e atualizar aqui para deixar disponível a toda comunidade. Aceito todas as dicas e ajudas possíveis, ainda estou no início de deixar isso bem dinâmico, mas com o exemplo aqui esposto, já é possível realizar APIs usando graphql de forma simples.

1) Faça o clone do repositório e instale as dependencias;
2) Após isso verá que existe dentro da pasta app > data > defaults dois arquivos que fazem toda a gestão dos schemas e resolvers. Caso precise implementar métodos novos que se apliquem a todos, você pode utiliza-los;
3) Na pasta app > data > resolvers você tem o conteúdo básico dos resolvers necessários para sua aplicação. No exemplo eu mantive apenas didKnowUsResolvers e userResolvers como exemplo;
4) Na pasta app > data > schemas você tem o conteúdo básico dos seus schemas, seguindo o mesmo princípio do item 3;
5) Na pasta app > data > services você possuí serviços caso precise tratar dados durante o processo. Por exemplo: Dentro do app > data > defaults > defaultResolvers você encontrará no método create uma tentativa de chamar a função: afterCreate. Essa função deve estar contida no arquivo de serviços do objeto em questão e assim você pode implementar e melhorar conforme sua necessidade.
6) Na pasta app > data você encontra o arquivo schema.js que é responsável por unificar todos os schemas disponíveis da sua aplicação;

Por enquanto é isso pessoal, conforme melhorar a aplicação eu trago mais novidades por aqui. Isso é apenas o começo.

Valeu :)