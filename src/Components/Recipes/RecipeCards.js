import React from 'react'
import { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import { useContext } from 'react'
import { DataContext } from '../../App'

export default function RecipeCards() {
    const RecipesData = useContext(DataContext)
    console.log(RecipesData)
    const [lgShow, setLgShow] = useState(false)
    return (
        <div>
            <>
                <Button onClick={() => setLgShow(true)}>Hey you!</Button>
                <Modal
                    size="lg"
                    show={lgShow}
                    onHide={() => setLgShow(false)}
                    aria-labelledby="example-modal-sizes-title-sm"
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="example-modal-sizes-title-sm">
                            Ingredients & Instructions :
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {RecipesData.veganRecipes && RecipesData.veganRecipes.map ((recipe, id)=>{
                            return(
                                <div>
                                    <h2>{recipe.dishName}</h2>
                                    <p>{recipe.Ingredients}</p>
                                    <p>{recipe.Instructions}</p>
                                </div>
                            )

                        })}

                    </Modal.Body>
                </Modal>
                <Modal
                    size="lg"
                    show={lgShow}
                    onHide={() => setLgShow(false)}
                    aria-labelledby="example-modal-sizes-title-lg"
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="example-modal-sizes-title-lg">
                            Large Modal
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>...</Modal.Body>
                </Modal>
            </>
            <h3> This is whhere the recipes will be rendered into cards</h3>
        </div>
    )
}
