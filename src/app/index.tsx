/*Ian Vanderkley 000981578 
Assignment 1 - CPRG 303
https://github.com/IanVanderkley/CPRG303-assignment1
I tried to make an app that looks like the Youtube Shorts UI, I had many issues getting the correct Icons but tried my best.
Found my Icons at https://icons8.com/icons and https://unicode.org/Public/18.0.0/charts/#symbols
Other Sources for Images are 
https://www.youtube.com/@vandermooseR6 for the youtube profile picture and https://www.youtube.com/@JustTalkinCollects for the JustTalkinCollects profile picture
As well as https://www.youtube.com/watch?v=KeQ9TIjOPm8 for the bottom right music Icon 
*/

import { StatusBar } from "expo-status-bar";
import {
  Alert,
  Button,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

interface ImageActionItemProps {
  iconSource: any;
  label: string;
}

function ImageActionItem({ iconSource, label }: ImageActionItemProps) {
  return (
    <View style={styles.actionItem}>
      <Image
        source={iconSource}
        style={styles.actionImage}
        resizeMode="contain"
      />
      <Text style={styles.actionLabel}>{label}</Text>
    </View>
  );
}

interface ImageNavItemProps {
  iconSource: any;
  label: string;
}

function ImageNavItem({ iconSource, label }: ImageNavItemProps) {
  return (
    <View style={styles.navItem}>
      <Image source={iconSource} style={styles.navImage} resizeMode="contain" />
      <Text style={styles.navLabel}>{label}</Text>
    </View>
  );
}

export default function Index() {
  return (
    <View style={styles.safeArea}>
      <StatusBar style="light" />

      <View style={styles.page}>
        {/* Main YouTube Short */}
        <View style={styles.videoArea}>
          {/* Background photo */}
          <Image
            source={require("./assets/Sample.jpeg")}
            style={styles.videoImage}
            resizeMode="cover"
          />

          {/* Search and menu */}
          <View style={styles.topBar}>
            <Text style={styles.searchIcon}>⌕</Text>
            <Text style={styles.menuIcon}>⋮</Text>
          </View>

          {/* Right side controls */}
          <View style={styles.actionColumn}>
            <ImageActionItem
              iconSource={require("C:\\CPRG303\\CPRG303-assignment1\\src\\app\\assets\\whiteHeart.png")}
              label="7"
            />

            <ImageActionItem
              iconSource={require("C:\\CPRG303\\CPRG303-assignment1\\src\\app\\assets\\comment.png")}
              label="0"
            />

            <ImageActionItem
              iconSource={require("C:\\CPRG303\\CPRG303-assignment1\\src\\app\\assets\\bookmark.png")}
              label="Save"
            />

            <ImageActionItem
              iconSource={require("C:\\CPRG303\\CPRG303-assignment1\\src\\app\\assets\\Share.png")}
              label="Share"
            />

            <ImageActionItem
              iconSource={require("C:\\CPRG303\\CPRG303-assignment1\\src\\app\\assets\\remix.png")}
              label="734"
            />

            <Image
              source={require("C:\\CPRG303\\CPRG303-assignment1\\src\\app\\assets\\Thumbnail.jpg")}
              style={styles.actionThumbnail}
              resizeMode="cover"
            />
          </View>

          {/* Channel information */}
          <View style={styles.detailsSection}>
            <View style={styles.channelRow}>
              <Image
                source={require("C:\\CPRG303\\CPRG303-assignment1\\src\\app\\assets\\JustTalkinCollects_profile.jpg")}
                style={styles.channelAvatar}
                resizeMode="cover"
              />

              <Text style={styles.channelName}>@JustTalkinCollects</Text>

              <Pressable
                style={styles.subscribeButton}
                onPress={() => console.log("Subscribe pressed")}
              >
                <Text style={styles.subscribeText}>Subscribe</Text>
              </Pressable>
            </View>

            <Text
              style={styles.videoTitle}
              numberOfLines={1}
              ellipsizeMode="tail"
            >
              How Many Pokemon Starters are you allowed to Have?
            </Text>
          </View>
          {/* Song information */}
          <View style={styles.musicRow}>
            <View style={styles.musicBar}>
              <Text style={styles.musicIcon}>♪</Text>

              <Text style={styles.musicText} numberOfLines={1}>
                Johto ジョウト Pokemon Lofi Mix II · @SeaSilver
              </Text>
            </View>
          </View>
        </View>

        {/* Small progress line */}
        <View style={styles.progressTrack}>
          <View style={styles.progressFill} />
        </View>

        {/* Bottom YouTube navigation */}
        <View style={styles.bottomNav}>
          <ImageNavItem
            iconSource={require("C:\\CPRG303\\CPRG303-assignment1\\src\\app\\assets\\home.png")}
            label="Home"
          />

          <ImageNavItem
            iconSource={require("C:\\CPRG303\\CPRG303-assignment1\\src\\app\\assets\\shorts.png")}
            label="Shorts"
          />

          <View style={styles.navItem}>
            <View style={styles.addCircle}>
              <Text style={styles.addIcon}>+</Text>
            </View>
          </View>

          <ImageNavItem
            iconSource={require("C:\\CPRG303\\CPRG303-assignment1\\src\\app\\assets\\subscriptions.png")}
            label="Subscriptions"
          />

          <ImageNavItem
            iconSource={require("C:\\CPRG303\\CPRG303-assignment1\\src\\app\\assets\\vandermooseProfile.jpg")}
            label="You"
          />
        </View>

        {/* Required assignment Alert button */}
        <View style={styles.alertSection}>
          <Button
            title="Alert"
            onPress={() => Alert.alert("Alert Button pressed")}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#000000",
  },

  page: {
    flex: 1,
    backgroundColor: "#000000",
  },

  // Main video -------------------------------------------------

  videoArea: {
    flex: 1,
    width: "100%",
    position: "relative",
    backgroundColor: "#000000",
  },

  videoImage: {
    width: "100%",
    height: "100%",
  },

  // Top search/menu --------------------------------------------

  topBar: {
    position: "absolute",
    top: 55,
    right: 15,
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },

  searchIcon: {
    color: "#FFFFFF",
    fontSize: 42,
    lineHeight: 44,
  },

  menuIcon: {
    color: "#FFFFFF",
    fontSize: 38,
    lineHeight: 40,
  },

  // Right action bar -------------------------------------------

  actionColumn: {
    position: "absolute",
    right: -6,
    bottom: 10,
    alignItems: "center",
    gap: 8,
  },

  actionItem: {
    color: "#FFFFFF",
    fontSize: 15,
    lineHeight: 31,
    width: 62,
    alignItems: "center",
  },

  actionIcon: {
    color: "#FFFFFF",
    fontSize: 24,
    lineHeight: 38,
    textAlign: "center",
  },

  actionLabel: {
    color: "#FFFFFF",
    fontSize: 12,
    marginTop: 1,
    textAlign: "center",
  },

  actionThumbnail: {
    width: 42,
    height: 42,
    borderRadius: 6,
    borderWidth: 2,
    marginTop: 7,
    borderColor: "#FFFFFF",
  },

  actionImage: {
    width: 24,
    height: 24,
  },

  // Channel information ---------------------------------------

  detailsSection: {
    position: "absolute",
    left: 15,
    right: 75,
    bottom: 30,
  },

  channelRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  channelAvatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
  },

  channelName: {
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: "700",
    marginLeft: 6,
  },

  subscribeButton: {
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 999,
    marginLeft: 5,
  },

  subscribeText: {
    color: "#000000",
    fontSize: 12,
    fontWeight: "600",
  },

  videoTitle: {
    color: "#FFFFFF",
    fontSize: 13.6,
    marginTop: 6,
  },

  // Progress line ----------------------------------------------

  progressTrack: {
    width: "100%",
    height: 4,
    backgroundColor: "#555555",
  },

  progressFill: {
    width: "38%",
    height: 4,
    backgroundColor: "#FFFFFF",
  },

  // Bottom navigation -----------------------------------------

  bottomNav: {
    height: 45,
    backgroundColor: "#111111",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },

  navItem: {
    width: 70,
    alignItems: "center",
    justifyContent: "center",
  },

  navLabel: {
    color: "#FFFFFF",
    fontSize: 10,
    marginTop: 1,
    textAlign: "center",
  },

  addCircle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "#303030",
    alignItems: "center",
    justifyContent: "center",
  },

  addIcon: {
    color: "#FFFFFF",
    fontSize: 24,
    lineHeight: 26,
    textAlign: "center",
    fontWeight: "300",
  },

  navImage: {
    width: 24,
    height: 24,
    borderRadius: 12,
  },

  // Required Alert button --------------------------------------

  alertSection: {
    backgroundColor: "#000000",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  // Music information -----------------------------------------

  musicRow: {
    position: "absolute",
    left: 12,
    right: 10,
    bottom: 6,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 8,
  },

  musicBar: {
    backgroundColor: "rgba(70, 70, 70, 0.5)",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 20,
  },

  musicIcon: {
    color: "#FFFFFF",
    fontSize: 12,
    marginRight: 3,
  },

  musicText: {
    color: "#FFFFFF",
    fontSize: 10,
    fontWeight: "600",
    marginHorizontal: 3,
  },

  musicThumbnail: {
    width: 38,
    height: 38,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "#FFFFFF",
  },
});
