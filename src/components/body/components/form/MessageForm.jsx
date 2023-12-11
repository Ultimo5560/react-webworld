
export const MessageForm = ({props}) => {

  const [msjForm, statusMsj] = props;

  return (
    <>
        <div className={`contact__show_msj ${(statusMsj===200)?'ok':'error'}`}>
            <p className='contact__text'>
                {msjForm}
            </p>
            <img src={`../${(statusMsj===200)?'check':'error'}.png`} className="contact__icon" />
        </div>
    </>

  )
}
