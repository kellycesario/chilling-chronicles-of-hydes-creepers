# Next and Contentful integration

## To connect the code with Contentful, and upon the creation of a new content_type, run the following commands

```powershell
Get-Content .env.local | ForEach-Object {
$line = $_.Trim()
if ($line -ne "" -and $line -notmatch '^\s*#') {
$key, $value = $line -split '=', 2
[System.Environment]::SetEnvironmentVariable($key, $value, [System.EnvironmentVariableTarget]::Process)
}
}
```

1. **`Get-Content .env.local`**: This command reads the content of the .env.local file. It uses the Get-Content cmdlet to retrieve the file's content.

2. **`ForEach-Object`**: This is a loop that processes each line of content obtained from the .env.local file.

3. **`$line = $_.Trim()`**: For each line, it removes extra whitespace at the beginning and end of the line.

4. **`if ($line -ne "" -and $line -notmatch '^\s*#')`**: Checks if the line is not empty (-ne "") and does not start with #, ignoring lines starting with # (comments).

5. **`$key, $value = $line -split '=', 2`**: Splits the line into two parts using the = character as a separator. The first element is assigned to the $key variable and the second to the $value variable. It uses -split to perform this split, limiting it to 2 parts.

6. **`[System.Environment]::SetEnvironmentVariable($key, $value, [System.EnvironmentVariableTarget]::Process)`**: Sets the environment variable in the scope of the current process using the values obtained from the line. The environment variable will be named `$key`, and its value will be `$value`.


```powershell
cf-content-types-generator --spaceId $env:CONTENTFUL_SPACE_ID --token $env:CONTENTFUL_MANAGEMENT_TOKEN -o src/contentful/types -X
```

1. **`cf-content-types-generator`**: This is a command-line utility  that generates `content types` for Contentful.
2. **`--spaceId $env:CONTENTFUL_SPACE_ID`**: Specifies the Contentful space ID. The --spaceId flag is followed by the value stored in the CONTENTFUL_SPACE_ID environment variable.
3. **`--token $env:CONTENTFUL_MANAGEMENT_TOKEN`**: Specifies the Contentful management token. The --token flag is followed by the value stored in the CONTENTFUL_MANAGEMENT_TOKEN environment variable.
4. **`-o src/contentful/types`**: Specifies the output directory where the generated content types will be saved. In this case, it's src/contentful/types.
5. **`-X`**: This flag is often used to signify additional options or special behavior. The specific meaning would depend on the context and implementation of the cf-content-types-generator tool.
