[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/M24O3lId)
# Search in Graphs

Recall the pseudocode for Depth-First Search:

Given a graph, a start node, and a node we're looking for:
- starting at the start node, while unvisited nodes remain
    - if current vertex $v$ is the node we're looking for, return it
    - mark $v$ as visited
    - for each edge $(v,w)$
        - recursively process $w$ unless marked visited

Implement the algorithm. You can choose any of the data structures we covered
(adjacency matrix or adjacency list) for the implementation. Your function
should return the list of nodes on the path from the start to the target (not
the list of nodes that you looked at during the search). If start and target are
the same, it should return a list with only that node. If there is no parth from
the start to the target, it should return an empty list. Start with the template
I provided in `code.js` and test your new function.

I have not provided any test code, but you can base yours on test code from
other exercises. Your tests must check the correctness of the result of running
the function and run automatically when you commit through a GitHub action.

## Runtime Analysis

What is the worst-case big $\Theta$ complexity of your implementation? Add your
answer, including your reasoning, to this markdown file.

This implementation of Depth First Seach has worst case complexity $\Theta (V + E)$.
The algorithm must visit a number of nodes in the graph until the target node is 
found or until the full graph is explored based on the while loop. This means that 
the runtime is related to the number of nodes in the graph. It also must visit some 
amount of edges in the graph to visit all the nodes which means that the runtime 
is related to the number of edges in the graph. This means that the average runtime is 
some factor of V + some factor of E which can be written as $O(V + E)$. In the worst
case the algorithm must visit all nodes and all edges which results in runtime of
$\Theta (V + E)$.

There is also 2 for loops outside the while loop calculating the actual path to 
the node but they have the same complexity as the while loop so we can ignore 
them. Therefore, the worst case can be written as $\Theta (V + E)$.

## Bonus

Implement and analyze breadth-first search.

This implementation of Breadth First Search is very similar to the Depth
First Search, it just uses shift instead of pop for getting the current 
node to make a queue instead of a stack. This makes a similar scenerio 
to Depth First Search which results in a worst case runtime of $Theta (V + E)$.

## Sources
Jacob Morgan helped me with one line of code, but my implementations look very similar. 
Please know that this was unintentional and I made the rest of the code on my own.
