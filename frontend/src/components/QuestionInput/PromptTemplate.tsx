import styles from './QuestionInput.module.css'

interface PromptProp {
    prompts: string[][]
    handlePromptUpdate: (text: string) => void
}
const PromptTemplate = ({prompts, handlePromptUpdate}: PromptProp) => {
  return (

    <div className={styles.flexContainer}>
        {prompts.map((text, index) => (
        <button 
          className={styles.templateButtonContainer} 
          onClick={() => {
            handlePromptUpdate(text[1])
            }
          }  
          key={index}>
          <div className={styles.templateButtonHeader}>  {text[0]} </div> 
          <div className={styles.templateButtonExample}> {text[1]} </div>
        </button>

    ))}
    </div>
  )
}

export default PromptTemplate