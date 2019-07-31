import React from "react"
import { TextInput, TextInputProps } from "redo-components"
import { store } from "renderer/common"

export type SearchInputProps = Omit<TextInputProps, "variant">

const onChange = async (event: React.ChangeEvent<HTMLInputElement>) =>
    store.mutate({
        cardFilter: event.target.value
    })

export const SearchInput = ({ ...rest }) => (
    <TextInput variant="underlined" {...{ onChange, ...rest }} />
)
