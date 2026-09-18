import { Checkbox } from "@/components/ui/radix/checkbox"
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
} from "@/components/ui/radix/field"

export function FieldCheckbox() {
  return (
    <FieldGroup className="w-full max-w-xs">
      <FieldSet>
        <FieldLegend variant="label">
          デスクトップに表示する項目
        </FieldLegend>
        <FieldDescription>
          デスクトップに表示したい項目を選択してください。
        </FieldDescription>
        <FieldGroup className="gap-3">
          <Field orientation="horizontal">
            <Checkbox id="finder-pref-9k2-hard-disks-ljj" />
            <FieldLabel
              htmlFor="finder-pref-9k2-hard-disks-ljj"
              className="font-normal"
              defaultChecked
            >
              ハードディスク
            </FieldLabel>
          </Field>
          <Field orientation="horizontal">
            <Checkbox id="finder-pref-9k2-external-disks-1yg" />
            <FieldLabel
              htmlFor="finder-pref-9k2-external-disks-1yg"
              className="font-normal"
            >
              外部ディスク
            </FieldLabel>
          </Field>
          <Field orientation="horizontal">
            <Checkbox id="finder-pref-9k2-cds-dvds-fzt" />
            <FieldLabel
              htmlFor="finder-pref-9k2-cds-dvds-fzt"
              className="font-normal"
            >
              CD、DVD、iPod
            </FieldLabel>
          </Field>
          <Field orientation="horizontal">
            <Checkbox id="finder-pref-9k2-connected-servers-6l2" />
            <FieldLabel
              htmlFor="finder-pref-9k2-connected-servers-6l2"
              className="font-normal"
            >
              接続中のサーバ
            </FieldLabel>
          </Field>
        </FieldGroup>
      </FieldSet>
      <FieldSeparator />
      <Field orientation="horizontal">
        <Checkbox id="finder-pref-9k2-sync-folders-nep" defaultChecked />
        <FieldContent>
          <FieldLabel htmlFor="finder-pref-9k2-sync-folders-nep">
            デスクトップと書類フォルダを同期
          </FieldLabel>
          <FieldDescription>
            デスクトップと書類フォルダはiCloud
            Driveと同期されています。他のデバイスからもアクセスできます。
          </FieldDescription>
        </FieldContent>
      </Field>
    </FieldGroup>
  )
}
