
export type DialogType = 'alert' | 'confirmation' | 'information'

export interface IDialogProps {
    open: boolean
    type: DialogType

}
