# MMM-Tesla

This an extension for the [MagicMirror](https://github.com/MichMich/MagicMirror).

With this module, you can display the status of your Rivian vehicle from [ElectraFi](https://www.teslafi.com/signup.php?referred=warlrus). Many different pieces of data can be shown, such as the battery level, range, and that's it because i haven't updated any of the rest of the modules yet. 

This is a total bastardization of the [MMM-Tesla](https://github.com/mattdy/MMM-Tesla) module by Mattdy. I just tweaked it to work with Rivians via the ElectraFi api. This is hacky as hell but it does work.

If you have two Rivians, you will need to clone everything and change the module to, like, mmm-rivian-2 or something. And you'll likely need to update rDataItemProvider and a couple other modules as well. There's namespace collisions happening that I don't have the mental bandwidth to chase down beyond 'oh look it works.'

I'm not taking bug reports. If it doesn't work for you, sorry. 




## Credits

- Seriously, this is entirely based on the work of [Matt Dyson](https://github.com/mattdy) and the work he did on [MMM-Tesla](https://github.com/mattdy/MMM-Tesla). All credit belongs to him.