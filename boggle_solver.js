exports.findAllSolutions = function (grid, dictionary) {
    let solutionsSet = new Array();
    let solutions = [];
  
    
    if (dictionary == null || grid == null) {
      return solutions;
    }
  
    for (let i = 0; i < grid.length; i++) {
      if (grid[i].length != grid.length) {
        return solutions;
      }
    }
  
    convertToLowerCase(grid, dictionary)
    let trie = new Set(dictionary);
  
    for (let j = 0; j < grid.length; j++) {
      for (let k = 0; k < grid.length; k++) {
        let visited = new Array(grid.length).fill(false).map(() => new Array(grid.length).fill(false));
        let word = [];
    wordSearch(word, grid, trie, j, k, visited, solutionsSet);
      }
    }
    solutions = Array.from(solutionsSet);
    return solutions;
  }
  
  
  function wordSearch(word, grid, trie, j, k, visited, solutionsSet) {
    const adjacent_lookup = [[-1, -1],
                            [-1, 0],
                            [-1, 1],
                            [0, 1],
                            [1, 1],
                            [1, 0],
                            [1, -1],
                            [0, -1]];
  
  
    if (j < 0 || j >= grid.length || k < 0 || k >= grid.length || visited[j][k] == true){
      return;
    }
    word += grid[j][k];
  
  
    if (isPrefix(trie, word)) {
      visited[j][k] = true;
  
      if (isWord(trie, word)) {
        solutionsSet.push(word);
      }
  
      for (let i = 0; i < 8; i++) {
        wordSearch(word, grid, trie, j + adjacent_lookup[i][0], k + adjacent_lookup[i][1], visited, solutionsSet);
      }
    }
  
  visited[j][k] = false;
  
  }
  
  
  function isPrefix(trie, word) {
  
    for (let tword of trie) {
  
    if (tword.substr(0, word.length) == word) {
      return true;
      }
    }
    return false;
  }
  
  
  function isWord(trie, word) {
    for (let tword of trie) {
  
    if (tword == word && word.length >= 3) {
      return true;
      }
    }
    return false;
  }
  
  
  function convertToLowerCase(grid, dictionary) {
    for (let x = 0; x < grid.length; x++) {
      for (let i = 0; i < grid[x].length; i++) {
        grid[x][i] = grid[x][i].toLowerCase();
      }
    }
    for (let x = 0; x < dictionary.length; x++) {
      dictionary[x] = dictionary[x].toLowerCase();
    }
  }
  
  var grid = [['T', 'W', 'Y', 'R'],
              ['E', 'N', 'P', 'H'],
              ['G', 'Z', 'Qu', 'R'],
              ['St', 'N', 'T', 'A']];
  
  var dictionary = ['art', 'ego', 'gent', 'get', 'net',                      'new', 'newt', 'prat',
                      'pry', 'qua', 'quart', 'quartz', 'rat', 'tar', 'tarp',
                      'ten', 'went', 'wet', 'arty', 'egg', 'not', 'quar'];
  
  console.log(exports.findAllSolutions(grid, dictionary));