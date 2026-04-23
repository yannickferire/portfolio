import { HugeiconsIcon } from "@hugeicons/react"
import {
  ArrowDown01Icon as ArrowDown01,
  ArrowRight01Icon as ArrowRight01,
  ArrowUp01Icon as ArrowUp01,
  ArrowUpRight01Icon as ArrowUpRight01,
  Briefcase01Icon as Briefcase01,
  BulbIcon as Bulb,
  Call02Icon as Call02,
  Cancel01Icon as Cancel01,
  LanguageSquareIcon as LanguageSquare,
  InfinityIcon as Infinity,
  Link01Icon as Link01,
  Location01Icon as Location01,
  Mail01Icon as Mail01,
  MortarboardIcon as Mortarboard,
  Package01Icon as Package01,
  SourceCodeIcon as SourceCode,
} from "@hugeicons/core-free-icons"

function createIcon(iconData: typeof ArrowRight01, displayName: string) {
  const Icon = ({ size = 18, ...props }: React.ComponentProps<typeof HugeiconsIcon>) => (
    <HugeiconsIcon icon={iconData} size={size} {...props} />
  )
  Icon.displayName = displayName
  return Icon
}

export const ArrowRightIcon = createIcon(ArrowRight01, "ArrowRightIcon")
export const ArrowUpIcon = createIcon(ArrowUp01, "ArrowUpIcon")
export const ArrowUpRightIcon = createIcon(ArrowUpRight01, "ArrowUpRightIcon")
export const BoxIcon = createIcon(Package01, "BoxIcon")
export const BriefcaseBusinessIcon = createIcon(Briefcase01, "BriefcaseBusinessIcon")
export const BulbIcon = createIcon(Bulb, "BulbIcon")
export const ChevronDownIcon = createIcon(ArrowDown01, "ChevronDownIcon")
export const CodeXmlIcon = createIcon(SourceCode, "CodeXmlIcon")
export const GlobeIcon = createIcon(LanguageSquare, "GlobeIcon")
export const GraduationCapIcon = createIcon(Mortarboard, "GraduationCapIcon")
export const InfinityIcon = createIcon(Infinity, "InfinityIcon")
export const LightbulbIcon = createIcon(Bulb, "LightbulbIcon")
export const LinkIcon = createIcon(Link01, "LinkIcon")
export const MailIcon = createIcon(Mail01, "MailIcon")
export const MapPinIcon = createIcon(Location01, "MapPinIcon")
export const PhoneIcon = createIcon(Call02, "PhoneIcon")
export const XIcon = createIcon(Cancel01, "XIcon")
