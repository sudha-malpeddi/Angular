export interface IModalComponent<TProceedResult, TCancelResult, TInput> {
    onClose(): Promise<TCancelResult>;
    onProceed(): Promise<TProceedResult>;
    onCancel(): Promise<TCancelResult>;
    Data: TInput
    readonly Title: string
    readonly ProceedButtonText: string
    readonly CancelButtonText: string
    readonly IsCancelButtonVisible: boolean
    readonly IsProceedButtonDisabled?: boolean
}