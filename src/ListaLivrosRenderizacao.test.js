import { render, screen } from "@testing-library/react";
import ListaLivros from "./ListaLivros";

// Inserção dos testes propostos

describe("Testes de renderização", () => {
    test("texto Lista de Livros", () => {
        render(<ListaLivros />);
        const linkElement = screen.getByText(/lista de livros/i);
    });

    test("input para o título do livro", () => {
        render(<ListaLivros />);
        const elInput = screen.getByLabelText("Insira um livro:" , {
            selector: "input",
        });
        expect(elInput).toBeInTheDocument();
    });

    test("botão Salvar", () => {
        render(<ListaLivros />);
        const elBotao = screen.getByTestId("salvar");
        expect(elBotao).toBeInTheDocument();
    });

})

// describe("Testes de comportamento", () => {
//   test("click no botão Salvar", () => {
//     render(<ListaLivros />);
//     expect(console.log("Botão Salvar foi clicado"));
//   });
// });

// describe("Testes de comportamento", () => {
//   test("click no botão Salvar", () => {
//     render(<ListaLivros />);
//     const botaoSalvar = screen.getByTestId("salvar");
//     expect(console.log(botaoSalvar));
//   });
// });

// describe("Testes de comportamento", () => {
//   test("evento change e form submit", () => {
//     const { container } = render(<ListaLivros />);
//     // expect(console.log(container.innerHTML));
//     const input = screen.getByTestId("titulo");
//     const [form] = container.querySelectorAll("form");
//     fireEvent.change(input, { target: { value: "React JS" } });
//     fireEvent.submit(form);
//     expect(console.log(container.innerHTML));
//   });
// });

/*describe("Testes de comportamento", () => {
  test("evento change e form submit", () => {
    const { container } = render(<ListaLivros />);
    const input = screen.getByTestId("titulo");
    const [form] = container.querySelectorAll("form");
    fireEvent.change(input, { target: { value: "React JS" } });
    fireEvent.submit(form);
    const livroItem = screen.getByTestId("ReactJS");
    const boleano = livroItem.hasChildNodes("React JS");
    expect(boleano).toBeTruthy();
  });
});*/
