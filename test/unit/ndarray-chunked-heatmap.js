import { cheatmap } from '../../src/ndarray-chunked-heatmap';

describe('cheatmap', () => {
  let chm;

  beforeEach(() => {
    chm = cheatmap();
  });

  it('should do something', () => {
    chm
      .chunkShape([3, 3])
      .data([
          [1, 2, 3, 4, 5, 6, 7],
          [1, 2, 3, 4, 5, 6, 7],
          [1, 2, 3, 4, 5, 6, 7],
          [1, 2, 3, 4, 5, 6, 7],
          [1, 2, 3, 4, 5, 6, 7]
      ]);
    let canvases = chm();
    let div = document.createElement('div');
    document.body.appendChild(div);

    for(let i = 0; i < canvases.length; ++i) {
      for(let j = 0; j < canvases[i].length; ++j) {
        div.appendChild(canvases[i][j]);
      }
    }
  });
});
