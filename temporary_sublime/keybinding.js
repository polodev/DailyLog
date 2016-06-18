// vintage - mode control
// exit insert mode
[
{ "keys": ["j", "j"], "command": "exit_insert_mode",
  "context":
  [
    { "key": "setting.command_mode", "operand": false },
    { "key": "setting.is_widget", "operand": false }
  ]
},

{ "keys": ["ctrl+shift+y+,"], "command": "expand_abbreviation_by_tab",
    "context": [
    {
      "operand": "source.js", 
      "operator": "equal", 
      "match_all": true, 
      "key": "selector"

    },
    {   
      "key": "selection_empty", 
      "operator": "equal", 
      "operand": true,
      "match_all": true 
    }
                                    
  ]
},

{ "keys": ["ctrl+0"], "command": "reset_font_size_to_user_defaults" },
{"keys": ["ctrl+t"], "command": "toggle_setting", "args": {"setting": "vintage_lines.force_mode"}},
{"keys": ["ctrl+alt+y"], "command": "toggle_setting", "args": {"setting": "line_numbers"} }

]