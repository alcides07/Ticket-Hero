# Documento de Visão

## Histórico de Revisões

| Data | Versão | Descrição | Autores |
| --- | --- | --- | --- |
| 17/02/2023 | 1.0 | Versão inicial | Alcides e Fernanda |

## 1. Objetivo do projeto

O projeto tem como objetivo ser uma plataforma web para facilitar a compra de ingressos de diferentes âmbitos, como por exemplo: cinema, palestra, festival, evento etc.

## 2. Descrição do problema

| Problema | Uma maneira de encontrar e participar de eventos ao estilo do usuário. |
| --- | --- |
| Afeta | Gerentes de eventos que desejam atrair pessoas e usuários que buscam um evento adequado para se divertir.  |
| Impacta | Equipes de eventos, artistas e frequentadores de eventos no geral. |
| Solução | Uma aplicação web que possibilita o agendamento de eventos e os classifica de acordo com o tipo da eventualidade. |

## 3. Descrição dos usuários

| Nome | Descrição | Responsabilidade |
| --- | --- | --- |
| Organizador | Pessoa que detém as informações referentes ao evento agendado. | Agendar o evento pela aplicação,  gerenciar as atrações disponíveis e organizar o evento.  |
| Cliente | Pessoa que necessita de informações a respeito de eventos de seu interesse. | Adquirir ingressos pela plataforma e mostrar o comprovante da compra na entrada do evento. |

## 4. Descrição do ambiente dos usuários

Ao logar no sistema, o cliente será direcionado para uma tela onde ele pode visualizar os ingressos que ele possui. Também estará disponível um menu no qual ele poderá selecionar páginas de edição do próprio perfil e de encontrar eventos. Já o organizador será direcionado para uma tela onde estarão listados todos os eventos registrados por ele na plataforma. 

## 5. Principais necessidades dos usuários

Encontrar eventos que se encaixem no seu desejo atual.

## 6. Alternativas concorrentes

Outgo, Sympla e Ingresso.com

## 7. Visão geral do produto

Uma plataforma para registro e venda de ingressos.

## 8. Escopo

### A plataforma é:

Uma plataforma para agendamento de eventos dos mais variados tipos e venda de ingressos.

### A plataforma não é:

- Uma plataforma de contratação de artistas.
- Uma plataforma para transmissão de eventos.

### A plataforma faz:

- Possibilita o agendamento de eventos.
- Registra organizadores de eventos no sistema.
- Exibe eventos registrados.
- Intermedia a venda de ingresso para eventos registrados no sistema.
- Filtra eventos por tipo.
- Possibilita a pesquisa de eventos.

### A plataforma não faz:

- Contratação de artistas por meio da plataforma.
- Transmissão dos eventos de forma online.

## 9. Casos de uso por ordem de prioridade

| Código | Caso de uso | Prioridade alta | Prioridade média | Prioridade baixa | Implementado (front + back) |
| --- | --- | --- | --- | --- | --- |
| C01 | Registrar evento | X |  |  |  |
| C02 | Listar evento | X |  |  |  |
| C03 | Comprar ingresso | X |  |  |  |
| C04 | Listar ingressos | X |  |  |  |
| C05 | Pesquisar evento |  | X |  |  |
| C06 | Editar informação de evento |  | X |  |  |
| C07 | Filtrar evento |  | X |  |  |
| C08 | Transferir ingresso |  | X |  |  |
| C09 | Cadastrar usuário |  |  | X |  |
| C10 | Logar usuário |  |  | X |  |
| C11 | Remover evento |  |  | X |  |
| C12 | Notificar edição de informação de evento |  |  | X |  |
| C13 | Excluir conta na plataforma |  |  | X |  |
| C14 | Cancelar compra de ingresso |  |  | X |  |

## 10. Requisitos funcionais

| Código | Nome | Descrição |
| --- | --- | --- |
| F01 | Autocadastro de usuário | Possibilita o registro de usuários na plataforma.  |
| F02 | Registro de evento | Registra novos eventos no sistema. |
| F03 | Venda de ingresso | Disponibiliza a venda de ingressos para os eventos registrados na plataforma de acordo com a capacidade de pessoas no local do evento. |
| F04 | Listagem de evento | Exibe a listagem de eventos mais próximos à data atual, podendo ser aplicada à lista filtros por tipos de evento. |
| F05 | Pesquisa de evento | Através de um campo de pesquisa o sistema permite a busca de eventos de acordo com as informações digitadas no campo. |

## 11. Requisitos não-funcionais

| Código | Nome | Descrição | Categoria | Classificação |
| --- | --- | --- | --- | --- |
| NF01 | Controle de acesso ao sistema | Apenas usuários autenticados podem ter acesso ao sistema. | Segurança | Obrigatório |
| NF02 | Design responsivo | O sistema web deve se adaptar a diferentes tamanhos de telas de dispositivos. | Usabilidade | Obrigatório |
| NF03 | Facilidade de uso | O sistema deve possuir uma interface intuitiva e amigável, a fim de proporcionar ao usuário uma prazerosa interação com a plataforma. | Usabilidade | Obrigatório |
| NF04 | Privacidade de dados pessoais | Usuários não podem visualizar informações privadas de outros usuários, como por exemplo dados de login. | Privacidade | Obrigatório |

## 12. Regras de negócio

| Código | Descrição |
| --- | --- |
| RN01 | O cancelamento da compra de ingressos só pode acontecer com até uma semana de antecedência do acontecimento do evento. |
| RN02 | As notificações que chegam referentes às alterações do evento são geradas apenas quando informações relevantes do evento são alteradas. Ex.: Data, horário ou atração. |
| RN03 | Após qualquer edição de informações relevantes do evento fica disponível o cancelamento da compra do ingresso. |