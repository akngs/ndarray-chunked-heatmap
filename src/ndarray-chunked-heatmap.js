import ndarray from 'ndarray';
import { extent } from 'd3-array';
import { chunk } from 'ndarray-chunk';
import { heatmap } from 'ndarray-heatmap';

function cheatmap() {
  let hm = heatmap();
  let chunkShape = [1024, 1024];

  function render(_) {
    let data = hm.data();
    hm.domain(extent(data.data));

    let chunkedArrays = chunk(data, chunkShape);
    let chunkedCanvases = new Array(chunkedArrays.length);
    for(let i = 0; i < chunkedArrays.length; ++i) {
      chunkedCanvases[i] = new Array(chunkedArrays[i].length);
      for(let j = 0; j < chunkedArrays[i].length; j++) {
        hm.data(chunkedArrays[i][j]);
        chunkedCanvases[i][j] = hm();
      }
    }
    return chunkedCanvases;
  }

  render.chunkShape = function(_) {
    return arguments.length ? (chunkShape = _, render) : chunkShape;
  }

  render.data = function(_) {
    return arguments.length ? (hm.data(_), render) : hm.data();
  }

  render.colorSteps = function(_) {
    return arguments.length ? (hm.colorSteps(_), render) : hm.colorSteps();
  }

  render.colorRange = function(_) {
    return arguments.length ? (hm.colorRange(_), render) : hm.colorRange();
  }

  return render;
}

export {
  cheatmap
};

