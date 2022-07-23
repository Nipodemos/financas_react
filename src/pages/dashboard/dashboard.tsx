export const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <button>Adicionar Despesa</button>
      <button>Adcionar Receita</button>
      <button>Adcionar Cartão de Débito</button>
      <table>
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Valor</th>
            <th>Data</th>
            <th>Pago</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Água</td>
            <td>R$50,00</td>
            <td>22/02/2022</td>
            <td>🆗</td>
            <td>
              <button>Definir como pago</button>
              <button>Editar</button>
              <button>Excluir</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
