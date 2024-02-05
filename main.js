
function shuffleChildren(parent)
{
    let children = parent.children
    let i = children.length, k , temp
    while(--i > 0)
    {
        k = Math.floor(Math.random() * (i+1))
        temp = children[k]
        children[k] = children[i]
        parent.appendChild(temp)
    }
}

function showReaction(type, clickedBox)
{
    clickedBox.classList.add(type)
    if(type !== "success")
    {
        setTimeout(function()
        {
            clickedBox.classList.remove(type)
        }, 800)
    }
}

const box = document.createElement("div")
box.classList.add("box")

const board = document.querySelector("#board")


// for(let i = 1; i <= 10; i++)
// {
//     let newbox = box.cloneNode()
//     newbox.innerText = i
//     board.appendChild(newbox)

//     newbox.addEventListener("click", function()
//     {
//         console.log("Boite n°" + i + ", click !")
//         newbox.classList.add("box-clicked")
//     })
// }

let nb = 1 

for(let i = 1; i <= 10; i++)
{
    const newbox = box.cloneNode()
    newbox.innerText = i
    board.appendChild(newbox)

    newbox.addEventListener("click", function()
    {
        if(i == nb)
        {
            newbox.classList.add("box-clicked")

            if(nb == board.children.length)
            {
                board.querySelectorAll(".box").forEach(function(box)
                {
                    showReaction("success", box)
                })
            }

            nb++
        }
        

        else if(i > nb)
        {
            showReaction("error", newbox)
            nb = 1

            // sur la liste des éléments HTML qui ont pour classe box-clicked
            board.querySelectorAll(".box-clicked")
                // pour chaque élément de la liste
                .forEach(
                    // déclaration et définition de la fonction qui sera appelée pour chaque élément de la liste
                    function(
                        // 1 élément de la liste
                        validBox
                    )
            {
                validBox.classList.remove("box-clicked")
            })
        }

        else
        {
            showReaction("notice", newbox)
        }
    })
}

shuffleChildren(board)


// stack MERN : MongoDB, Express, React, Node
// MongoDB (BDD noSQL) -> peut aller avec Mongoose (librairie entre backend JS et BDD MongoDB)
// Express
// Node : utiliser npm (Node Package/module/dépendance Manager), CLI (Command Line Interface)
// React : Framework JS, se code en JSX
