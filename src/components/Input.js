const Input = ({placeholder, type='text', name, icon}) => {
    const template = `
    <div class="input">
        <input
            class="input_item"
            placeholder="${placeholder}"
            type="${type}"
            name="${name}"
        />
        <div class="input_btn" ><i class="${icon}"></i></div>
    </div>
    `

    return template
}

export default Input