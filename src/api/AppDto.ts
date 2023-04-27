export enum ContainerPageType{
    Form = "form",
    Table = "table",
    Details = "details",
    DetailsForm = "details-form",
    Part = "part",
    PartForm = "part-form"
}

export enum SizeType{
    Small = "small",
    Large = "large",
    Medium = "medium"
}

export enum PositionType{
    Top = "top",
    Left = "left",
    Right = "right",
    Bottom = "bottom"
}

export type InputProps = React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>, 
    HTMLInputElement
>