import { SvgIconComponent } from '@mui/icons-material'
import { IconButton, Tooltip } from '@mui/material'
interface TooltipIconButtonProps {
  title: string
  onClick?: () => void
  Icon: SvgIconComponent
}
export default function TooltipIconButton({ title, onClick, Icon }: TooltipIconButtonProps) {
  return (
    <Tooltip title={title}>
      <IconButton onClick={onClick}>
        <Icon />
      </IconButton>
    </Tooltip>
  )
}
