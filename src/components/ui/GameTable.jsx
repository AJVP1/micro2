import { memo } from "react";

const cellStyles = "border border-black p-3";

const GameTable = memo(function GameTable({
  player1Label = "J1",
  player2Label = "J2",
  player1Strategies,
  player2Strategies,
  payoffs,
  highlightCells = [],
  caption,
}) {
  const isHighlighted = (row, col) =>
    highlightCells.some((cell) => cell.row === row && cell.col === col);

  return (
    <table
      className="my-7 border-collapse mx-auto text-center"
      role="grid"
      aria-label={caption || `Matriz de pagos: ${player1Label} vs ${player2Label}`}
    >
      <thead>
        <tr>
          <th className={cellStyles} aria-hidden="true"></th>
          <th className={cellStyles} colSpan={player2Strategies.length + 1}>
            {player2Label}
          </th>
        </tr>
      </thead>

      <tbody>
        {/* Fila de encabezados de estrategias J2 */}
        <tr>
          <th className={cellStyles} rowSpan={player1Strategies.length + 1}>
            <div className="flex flex-col items-center justify-center leading-none">
              <span>{player1Label}</span>
            </div>
          </th>
          <th className={cellStyles}>Estrategias</th>
          {player2Strategies.map((strategy, idx) => (
            <th key={idx} className={cellStyles} scope="col">
              {strategy}
            </th>
          ))}
        </tr>

        {/* Filas de pagos */}
        {player1Strategies.map((strategy, rowIdx) => (
          <tr key={rowIdx}>
            <th className={cellStyles} scope="row">
              {strategy}
            </th>
            {payoffs[rowIdx].map((payoff, colIdx) => (
              <td
                key={colIdx}
                className={`${cellStyles} ${
                  isHighlighted(rowIdx, colIdx) ? "bg-yellow-100" : ""
                }`}
              >
                {payoff}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
});

export default GameTable;
