function depthFirstSearch(graph, startNode, targetNode) { // This site was helpful for the general structure of how depthFirstSearch works, 
    if (graph.length == 0) {                              // however, no code was taken from here: https://www.geeksforgeeks.org/depth-first-search-or-dfs-for-a-graph/
        return [];
    } else if (graph.length == 1) {
        var visited = [startNode];
        return visited;
    }
    var visited = [];
    var tmp = [];
    var found = false;
    tmp.push(startNode);
    while (tmp.length != 0) {
        var currentNode = tmp.pop();
        visited.push(currentNode);
        if (currentNode == targetNode) {
            found = true;
            break;
        } else {
            for (var i = 0; i < graph[currentNode].length; i++) {
                if (visited[i] != graph[currentNode][i]) {              // Jacob Morgan helped me with this line here
                    tmp.push(graph[currentNode][i]);
                } 
            }
        }
    }
    if (!found) {
        return [];
    }
    for (var j = 1; j < visited.length; j++) {
        var prevNode = visited[j - 1];
        var nextNode = visited[j + 1];

        for (var k = 0; k < graph[prevNode].length; k++) {
            if (j == 0 || j == visited.length - 1) {
            } else if (graph[prevNode][k] == nextNode) {
                visited.splice(j, 1);
                j--;
                break;
            }
        }
    }
    return visited;
}

function breadthFirstSearch(graph, startNode, targetNode) { // Same as above function: https://www.geeksforgeeks.org/breadth-first-search-or-bfs-for-a-graph/
    if (graph.length == 0) {
        return [];
    } else if (graph.length == 1) {
        var visited = [startNode];
        return visited;
    }
    var visited = [];
    var tmp = [];
    var found = false;
    tmp.push(startNode);
    while (tmp.length != 0) {
        var currentNode = tmp.shift();
        visited.push(currentNode);
        if (currentNode == targetNode) {
            found = true;
            break;
        } else {
            for (var i = 0; i < graph[currentNode].length; i++) {
                if (visited[i] != graph[currentNode][i]) {
                    tmp.push(graph[currentNode][i]);
                } 
            }
        }
    }
    if (!found) {
        return [];
    }
    for (var j = 1; j < visited.length; j++) {
        var prevNode = visited[j - 1];
        var nextNode = visited[j + 1];

        for (var k = 0; k < graph[prevNode].length; k++) {
            if (j == 0 || j == visited.length - 1) {
            } else if (graph[prevNode][k] == nextNode) {
                visited.splice(j, 1);
                j--;
                break;
            }
        }
    }
    return visited;
}

module.exports = {depthFirstSearch, breadthFirstSearch};
