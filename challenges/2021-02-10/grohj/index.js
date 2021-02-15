const createNode = value => ({value, left: null, right: null});

/**
 * To try to make the Group implementation faster I opted in to use Binary Search Tree, which in best case scenario
 * has finding and adding complexity of O(log(n)).
 *
 * Traditional array (lets assume implemented as linked list, god knows what node uses) has adding time of O(1) if we remember the tail,
 * but searching O(n).
 *
 * Also my brain got dumb so I wanted to implement BST for myself if I still remember it hehe
 */
class BST {
    root = null;

    findMin(node) {
        while (node.left) {
            node = node.left
        }
        return node;
    }

    add(item) {
        const recursiveAdd = (node, value) => {
            if (value < node.value) {
                if (!node.left)
                    node.left = createNode(item)
                else recursiveAdd(node.left, value);
            } else if (value > node.value) {
                if (!node.right)
                    node.right = createNode(item)
                else recursiveAdd(node.right, item)
            }
        }
        if (!this.root)
            this.root = createNode(item)
        else recursiveAdd(this.root, item)
    }

    remove(item) {
        const recursiveRemove = (node, value) => {
            if (!node)
                return null;
            if (value < node.value) node.left = recursiveRemove(node.left, value)
            else if (value > node.value) node.right = recursiveRemove(node.right, value)
            else {
                if (!node.left)
                    return node.right;
                else if (!node.right)
                    return node.left;

                node.value = this.findMin(node.right).value;
                node.right = recursiveRemove(node.right, node.value);
            }
            return node;
        };
        this.root = recursiveRemove(this.root, item)
    }

    printInfix() {
        const print = (node, level) => {
            if (!node)
                return;
            print(node.left, level + 1)
            console.log(Array.from({length: level}, () => ' ').join(""), node.value)
            print(node.right, level + 1)
        }
        print(this.root, 0)
    }

    has(item) {
        const recursiveHas = (node, value) => {
            if (node.value === value)
                return true;
            if (node.left && value < node.left) {
                return recursiveHas(node.left, value);
            } else if (node.right && value > node.right) {
                return recursiveHas(node.right, value);
            }
            return false;
        }
        return recursiveHas(this.root, item);
    }

    static fromArray(arr) {
        const tree = new BST()
        arr.forEach(item => tree.add(item))
        return tree;
    }
}

class Group {
    tree = new BST()

    static from(arr) {
        const group = new Group()
        group.tree = BST.fromArray(arr);
        return group
    }

    has(item) {
        return this.tree.has(item);
    }

    add(item) {
        this.tree.add(item)
    }

    delete(item) {
        this.tree.remove(item)
    }

}

module.exports = Group;